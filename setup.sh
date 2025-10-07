#!/bin/bash

echo "🚀 Setting up Google Drive Clone..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    echo "Visit: https://nodejs.org/"
    exit 1
fi

# Check if yarn is installed, if not use npm
if command -v yarn &> /dev/null; then
    echo "📦 Installing dependencies with yarn..."
    yarn install
else
    echo "📦 Installing dependencies with npm..."
    npm install
fi

echo "✅ Dependencies installed successfully!"
echo ""
echo "📝 Next steps:"
echo "1. Set up your Firebase project at https://console.firebase.google.com/"
echo "2. Enable Authentication and Firestore Database"
echo "3. Enable Storage"
echo "4. Update src/firebase.js with your Firebase configuration"
echo "5. Run 'yarn start' or 'npm start' to start the development server"
echo ""
echo "🎉 Happy coding!"
