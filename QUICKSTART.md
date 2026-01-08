# 🎯 Quick Start Guide

## Start the App
```bash
npm run dev
```
Then open: http://localhost:5173

## First Use
1. App will prompt for Gemini API Key
2. Get key from: https://makersuite.google.com/app/apikey
3. Key is saved in browser localStorage

## Navigation
- **Host List** → Click host name/avatar → **Profile View**
- **Host List** → Click "Chat" button → **Chat View**
- **Profile View** → Click "Start Chat" → **Chat View**
- **Profile/Chat** → Click back arrow → **Host List**

## Adding Hosts
1. Edit `host_profile.json`
2. Add avatar image: `src/assets/avatars/host_X.jpg`
3. Restart dev server

## File Structure
```
host_flirting/
├── index.html              # Main HTML
├── host_profile.json       # Host data
├── package.json            # Dependencies
├── vite.config.js          # Vite config
├── tailwind.config.js      # Tailwind config
├── postcss.config.js       # PostCSS config
└── src/
    ├── main.js             # App logic
    ├── style.css           # Custom styles
    └── assets/
        └── avatars/        # Host images
```

## Key Features Implemented
✅ Auto-detect hosts from JSON
✅ Host list with avatars
✅ Host profile view
✅ Chat with AI (Gemini)
✅ Emotion display
✅ Japanese responses
✅ Mobile-optimized
✅ Touch-friendly
✅ Smooth navigation
✅ Error handling

## Commands
- `npm run dev` - Start dev server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Notes
- App uses placeholder images if avatars not found
- API key stored in localStorage
- Chat history maintained per session
- Maximum 3 sentences per AI response
- Responses always in Japanese
