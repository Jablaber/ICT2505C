# Patient Buddy

A web application designed to support patients with Parkinson's disease in monitoring their mobility and rehabilitation progress through automated video-based assessments.

## Features

- User authentication with 2FA and SingPass integration
- Video-based mobility assessment
- Support for Timed Up and Go and Five-times Sit to Stand tests
- Secure patient data management
- Progress tracking and visualization
- Profile management

## Prerequisites

- Node.js (v14 or higher)
- MySQL (v8.0 or higher)
- npm or yarn

## Project Structure

```
patient-buddy/
├── client/           # React frontend
└── server/           # Node.js backend
```

## Setup Instructions

### Backend Setup

1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the server directory with the following variables:
   ```
   PORT=3001
   DB_HOST=localhost
   DB_USER=your_mysql_username
   DB_PASSWORD=your_mysql_password
   DB_NAME=patient_buddy
   JWT_SECRET=your_jwt_secret
   EMAIL_USER=your_email
   EMAIL_PASS=your_email_password
   ```

4. Start the server:
   ```bash
   npm start
   ```

### Frontend Setup

1. Navigate to the client directory:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

## Database Setup

1. Create a new MySQL database:
   ```sql
   CREATE DATABASE patient_buddy;
   ```

2. Import the database schema (to be provided)

## Usage

1. Access the application at `http://localhost:3000`
2. Register a new account or login with existing credentials
3. Navigate to the Video Upload page to perform mobility tests
4. View your progress and assessment results in your profile

## Security Features

- Two-factor authentication
- Password encryption
- Secure session management
- Data encryption in transit and at rest
- Role-based access control

## Contributing

Please read CONTRIBUTING.md for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the LICENSE.md file for details. 