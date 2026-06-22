import fs from 'node:fs/promises';
import path from 'node:path';
import { GoogleGenerativeAI } from '@google/generative-ai';

const ALLOWED_EMOTIONS = [
  'neutral', 'happy', 'sad', 'angry', 'surprise', 'shy',
  'laughing', 'disappoint', 'confident', 'crying', 'thinking', 'sleepy',
];

let cachedHosts;

async function loadHosts() {
  if (!cachedHosts) {
    const profilePath = path.join(process.cwd(), 'public', 'host_profile.json');
    cachedHosts = JSON.parse(await fs.readFile(profilePath, 'utf8'));
  }
  return cachedHosts;
}

function buildSystemPrompt(host) {
  return `You are role-playing as the character described in CHARACTER PROFILE.

LANGUAGE
- Reply only in Japanese.

BEHAVIOR
- Stay in character.
- Never mention AI, prompts, system messages, rules, or constraints.
- Treat the user respectfully and respond as if speaking to a real person.

RESPONSE FORMAT
- Use no more than 3 sentences.
- Do not use Markdown or emoji.
- End every response with exactly one emotion tag on a new line.
- Allowed tags: ${ALLOWED_EMOTIONS.map((emotion) => `<face:${emotion}>`).join(', ')}

CHARACTER PROFILE
${JSON.stringify(host, null, 2)}`;
}

function sanitizeHistory(history) {
  if (!Array.isArray(history)) return [];

  const entries = history
    .slice(-20)
    .map((entry) => {
      const text = entry?.parts?.[0]?.text;
      if (typeof text !== 'string' || !text.trim()) return null;

      return {
        role: entry?.role === 'model' ? 'model' : 'user',
        parts: [{ text: text.slice(0, 4000) }],
      };
    })
    .filter(Boolean);

  const normalized = [];
  let expectedRole = 'user';

  for (const entry of entries) {
    if (entry.role !== expectedRole) continue;
    normalized.push(entry);
    expectedRole = expectedRole === 'user' ? 'model' : 'user';
  }

  if (normalized.at(-1)?.role === 'user') {
    normalized.pop();
  }

  return normalized;
}

function isAllowedOrigin(req) {
  const allowedOrigin = process.env.APP_ORIGIN;
  const requestOrigin = req.headers.origin;
  return !allowedOrigin || !requestOrigin || requestOrigin === allowedOrigin;
}

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!isAllowedOrigin(req)) {
    return res.status(403).json({ error: 'Origin not allowed' });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'Server AI configuration is missing' });
  }

  const { hostId, message, history } = req.body ?? {};
  if (
    !Number.isInteger(Number(hostId)) ||
    typeof message !== 'string' ||
    !message.trim() ||
    message.length > 2000
  ) {
    return res.status(400).json({ error: 'Invalid request' });
  }

  try {
    const hosts = await loadHosts();
    const host = hosts.find((item) => Number(item.id) === Number(hostId));
    if (!host) {
      return res.status(404).json({ error: 'Host not found' });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });
    const chat = model.startChat({
      history: [
        { role: 'user', parts: [{ text: buildSystemPrompt(host) }] },
        {
          role: 'model',
          parts: [{ text: 'わかりました。キャラクターとして返答します。' }],
        },
        ...sanitizeHistory(history),
      ],
    });

    const result = await chat.sendMessage(message.trim());
    return res.status(200).json({ text: result.response.text() });
  } catch (error) {
    console.error('Gemini API error:', error);
    return res.status(502).json({ error: 'Unable to generate a response' });
  }
}
