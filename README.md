# Expense Tracker PWA

A Progressive Web Application for tracking personal expenses with cross-platform support and cloud synchronization.

## Features

- 📱 Progressive Web App (PWA) - installable on iOS and desktop
- 💰 Track and manage expenses
- 🔄 Real-time sync with MongoDB
- 📊 Expense analytics and reports
- 📷 Receipt image upload
- 🔒 Secure authentication
- 📵 Offline support with IndexedDB

## Tech Stack

- React.js - Frontend framework
- Vite - Build tool and development server
- MongoDB Atlas - Cloud database
- Express.js - Backend framework
- Node.js - Runtime environment
- Progressive Web App (PWA) features
  - Service Workers for offline functionality
  - IndexedDB for local storage
  - Web App Manifest for installation

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14 or higher)
- npm or yarn
- MongoDB Atlas account
- Git

## Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd expense-tracker-pwa
```

2. Install dependencies
```bash
npm install
```

3. Create a .env file in the root directory with the following variables:
```env
# MongoDB Connection
MONGODB_URI=your_mongodb_connection_string

# Server Configuration
PORT=3002
NODE_ENV=development

# JWT Secret for Authentication
JWT_SECRET=your_jwt_secret
```

## Development

1. Start the backend server:
```bash
npm run start
```

2. In a new terminal, start the frontend development server:
```bash
npm run dev
```

The application will be available at:
- Frontend: http://localhost:5173
- Backend API: http://localhost:3002

## Building for Production

1. Build the frontend:
```bash
npm run build
```

2. The built files will be in the `dist` directory

## Deployment

The application can be deployed to any hosting platform that supports Node.js applications. The frontend is built as a static site and can be served from any web server.

1. Deploy the frontend:
```bash
npm run deploy
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.