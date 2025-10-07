# Google Drive Clone

A React-based Google Drive clone with Firebase integration for file storage and authentication. Upload, organize, and access files securely with a clean, intuitive interface inspired by Google Drive.

## Features

- 🔐 Google Authentication
- 📁 File upload and storage
- 🗂️ File management (view, delete, organize)
- 📱 Responsive design for desktop and mobile devices
- 🎨 Material-UI components
- ⚡ Real-time updates for file uploads and folder changes
- 🗂️ Familiar folder structure

## Demo

*Add a screenshot or live link here if available.*

## Built With

- **JavaScript** (69.9%)
- **CSS** (27.5%)
- **HTML** (2.6%)
- **React** - Frontend framework
- **Firebase** - Backend services (Authentication, Storage, Firestore)

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 14 or higher)
- npm or yarn
- A Google account for Firebase setup

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/OreoSu6oi/google-drive-clone-build.git
cd google-drive-clone-build
```

### 2. Install Dependencies

```bash
# Using npm
npm install

# Or using yarn
yarn install
```

### 3. Firebase Configuration

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or use an existing one
3. Enable Authentication and Firestore Database
4. Enable Storage
5. Copy your Firebase configuration
6. Replace the configuration in `src/firebase.js`:

```javascript
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id"
};
```

### 4. Start the Development Server

```bash
# Using npm
npm start

# Or using yarn
yarn start
```

The application will open at `http://localhost:3000`

## Project Structure

```
src/
├── components/
│   ├── filesView/     # File display components
│   ├── header/        # Header component
│   ├── sidebar/       # Sidebar navigation
│   └── sideIcons/     # Right sidebar icons
├── styles/            # CSS files
├── media/             # Static assets
├── App.js             # Main app component
├── firebase.js        # Firebase configuration
└── index.js           # App entry point
```

## Available Scripts

- `npm start` or `yarn start` - Runs the app in development mode
- `npm build` or `yarn build` - Builds the app for production
- `npm test` or `yarn test` - Launches the test runner

## Troubleshooting

### Common Issues

1. **ETIMEDOUT Error**: Clear cache and reinstall dependencies
   ```bash
   rm -rf node_modules yarn.lock package-lock.json
   yarn install
   ```

2. **Firebase Authentication Issues**: Ensure your Firebase project has Authentication enabled with Google provider

3. **File Upload Issues**: Check that Firebase Storage is enabled and properly configured

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is for educational purposes.

## Acknowledgments

- Inspired by Google Drive's clean UI and features
- [OreoSu6oi/google-drive-clone-build](https://github.com/OreoSu6oi/google-drive-clone-build)
