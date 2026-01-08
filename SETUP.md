# 🌟 Host Flirting App - Setup & Installation

## Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager
- Gemini API Key (get from https://makersuite.google.com/app/apikey)

## Installation Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Add Host Avatar Images
Place host avatar images in `src/assets/avatars/` directory:
- Name format: `host_1.jpg`, `host_2.jpg`, etc.
- Recommended size: 128x128 pixels
- The app will use placeholder images if avatars are not found

### 3. Run Development Server
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### 4. First Time Setup
When you first open the app, you'll be prompted to enter your Gemini API Key. The key will be stored in localStorage.

To reset the API key:
- Open browser console
- Run: `localStorage.removeItem('gemini_api_key')`
- Refresh the page

## Build for Production

```bash
npm run build
```

The production build will be in the `dist` directory.

## Preview Production Build

```bash
npm run preview
```

## Features

✅ **Host List View**
- Auto-loads hosts from JSON
- Shows avatars, names, and basic info
- Click avatar/name to view profile
- Click chat button to start conversation

✅ **Host Profile View**
- Displays complete host information
- Shows basic profile and status chart
- Back navigation to host list
- Start chat directly from profile

✅ **Chat View**
- AI-powered conversation using Gemini
- Character stays in-role based on profile
- Emotion display with each message
- Japanese language responses
- Maximum 3 sentences per response
- Back navigation to host list

✅ **Technical Features**
- Mobile-first responsive design
- Touch-friendly interface
- Prevents zoom on double-tap
- Smooth animations and transitions
- Loading states and error handling
- LocalStorage for API key persistence

## Customization

### Adding New Hosts
1. Edit `host_profile.json`
2. Add new host object with required fields
3. Add corresponding avatar image in `src/assets/avatars/`

### Modifying Styles
- Edit `src/style.css` for custom styles
- Edit `tailwind.config.js` for theme customization

### Changing AI Model
Edit in `src/main.js`:
```javascript
model = genAI.getGenerativeModel({ model: 'gemini-pro' });
```

## Troubleshooting

**Issue: Chat not working**
- Verify Gemini API key is valid
- Check browser console for errors
- Ensure internet connection is active

**Issue: Images not loading**
- Check image files are in correct directory
- Verify file names match the host IDs
- App will use placeholders if images missing

**Issue: Build fails**
- Delete `node_modules` and reinstall
- Clear npm cache: `npm cache clean --force`
- Try with Node.js v18+

## License
MIT
