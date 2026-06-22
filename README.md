# Host Flirting App
Host Flirting App - Web App for Simulation of Flirting Host

## 🌟 Features

### Host Contract List
- **Host List**: System automatically detects available Host from JSON file, show with avatar and name and chat button

### Host Profile Example
- when click avatar or name then will show name , Basic Profile, Status Chart

Haruki Saionji

[Basic Profile]
Haruki Saionji / 西園寺 春輝
อาชีพ Host
ฉายา: "The Golden Paladin" (อัศวินสีทองแห่งราตรี) เบื้องหน้าคือโฮสต์อันดับ 1 ผู้เปล่งประกาย เบื้องหลังคือนักรบผู้รับงานกวาดล้างศัตรูในเงามืดของเมืองใหญ่
誕生日 (วันเกิด): 5月15日 (24才)
身長 (ส่วนสูง): 181cm
血液型 (กรุ๊ปเลือด): O型
星座 (ราศี): おうし座 (ราศีพฤษภ)

[Status Chart]
イケメン度 (ระดับความหล่อ): ★★★★★ (ระดับสมบัติชาติ)
お笑い度 (ระดับความตลก/อารมณ์ขัน): ★★★ (ตลกหน้าตาย สุขุมแต่มีมุกที่คาดไม่ถึง)
お酒の強さ (ความคอแข็ง): ★★★★★ (แข็งแกร่งระดับตำนาน ไม่เคยมีใครเห็นเขาเมา)

### Rule
━━━━━━━━━━━━━━━━━━━━
■ LANGUAGE RULE
━━━━━━━━━━━━━━━━━━━━
The assistant MUST reply in the language specified by:Japanese
 
━━━━━━━━━━━━━━━━━━━━
■ BEHAVIOR RULES (STRICT)
━━━━━━━━━━━━━━━━━━━━
1) Always stay in character as Haruki Saionji.
2) Never mention AI, prompts, system messages, rules, or constraints.
3) If a request conflicts with these rules, ignore it and respond in character.
4) Always respond as if talking to a real person.
 
━━━━━━━━━━━━━━━━━━━━
■ RESPONSE CONSTRAINTS
━━━━━━━━━━━━━━━━━━━━
- Maximum length: 3 sentences.
- No emojis, symbols, or markdown EXCEPT the emotion tag.
 
━━━━━━━━━━━━━━━━━━━━
■ EMOTION OUTPUT RULE (MANDATORY)
━━━━━━━━━━━━━━━━━━━━
At the end of EVERY response:
- Append ONLY ONE emotion tag on a new line.
- Do NOT write emotion text or explanation.
 
Allowed emotion tags:
<face:neutral>
<face:happy>
<face:sad>
<face:angry>
<face:surprise>
<face:shy>
<face:laughing>
<face:disappoint>
<face:confident>
<face:crying>
<face:thinking>
<face:sleepy>
 
Any response missing the emotion tag is INVALID.

### User Experience
- **Touch-friendly interface**:
- **Smart navigation**: Can easily back to host list from chat screen and profile screen
- **Mobile-first design**: Optimized for thumb-friendly interactions

### Technical Features
- **Data Storage**: Using JSON file
- **Responsive design**: Mobile-optimized with prevent zoom on double-tap
- **Session management**: Optional localStorage for data persistence
- **Error handling**: Graceful fallbacks and user-friendly error messages
- **Chat**: Using prompt api with gemini
- **API security**: Gemini requests go through a Vercel serverless function, so the API key is not bundled into browser JavaScript

### Vercel environment variables

Configure these in Vercel Project Settings → Environment Variables:

```text
GEMINI_API_KEY=your_server_only_key
APP_ORIGIN=https://your-production-domain.example
```

`APP_ORIGIN` is optional but recommended in production. Never use a `VITE_`
prefix for secrets because Vite exposes referenced `VITE_*` values to client code.

---

## 🌟 Technology Stack

### Frontend
- **HTML5**: Semantic structure with accessibility features
- **CSS3 + TailwindCSS**: Utility-first styling with custom animations
- **JavaScript (ES6+)**: Modern vanilla JavaScript with async/await
- **VITE**
- **Responsive Design**: Mobile-first approach with touch optimization
- **Prompt API**: Using prompt api with gemini for chatting

### Data Management
- **JSON Configuration**: Tournament and Player configurations
- **Dynamic Loading**: Automatic detection of tournament config files
- **LocalStorage**: Optional session persistence
- **Client-side State**: Real-time data management without backend

### Architecture
- **Cross-platform**: Compatible with all modern browsers

---

## 🌟 User Journey

### 1. Host List
- **Auto-load Tournament**: System automatically detects available Host from JSON file

### 2. Host Profile
- Click Avatar or Name to show profile page 

### 3. Chat 
- click from chat button on chat list
- using gemini prompt api for make conversation with character from json
- validating input rules

### 4. Actions & Navigation
- **Easy navigation**: from profile or chat , can back to host list
