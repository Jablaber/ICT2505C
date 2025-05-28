# Patient Buddy

## Overview
Patient Buddy is a web application designed to assist patients in managing their health and wellness. The application provides features for user authentication, profile management, and video uploads for specific health tests.

## Features
- **User Authentication**: Secure login with email/password and two-factor authentication using QR code for SingPass.
- **User Management**: Create, edit, and manage user profiles including personal details and medical conditions.
- **Password Reset**: Users can reset their passwords with a two-factor authentication code sent to their email.
- **Video Uploads**: Users can upload instructional videos for the "Timed Up and Go test" and "Five-times Sit to Stand test".

## Project Structure
```
Patient-Buddy
├── client
│   ├── public
│   │   ├── index.html
│   │   └── favicon.ico
│   ├── src
│   │   ├── components
│   │   │   ├── Auth
│   │   │   │   ├── Login.js
│   │   │   │   ├── Register.js
│   │   │   │   ├── ResetPassword.js
│   │   │   │   └── TwoFactorAuth.js
│   │   │   ├── Dashboard
│   │   │   │   ├── EditUserDetails.js
│   │   │   │   ├── ChangePassword.js
│   │   │   │   └── VideoUpload.js
│   │   │   └── Home.js
│   │   ├── services
│   │   │   ├── api.js
│   │   │   └── auth.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── styles
│   │       └── main.css
│   └── package.json
├── server
│   ├── config
│   │   ├── db.js
│   │   └── nodemailer.js
│   ├── controllers
│   │   ├── authController.js
│   │   ├── userController.js
│   │   └── videoController.js
│   ├── models
│   │   ├── User.js
│   │   └── Video.js
│   ├── routes
│   │   ├── authRoutes.js
│   │   ├── userRoutes.js
│   │   └── videoRoutes.js
│   ├── app.js
│   ├── server.js
│   └── package.json
├── README.md
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the client directory and install dependencies:
   ```
   cd client
   npm install
   ```
3. Navigate to the server directory and install dependencies:
   ```
   cd ../server
   npm install
   ```

## Running the Application
- Start the server:
  ```
  cd server
  node server.js
  ```
- Start the client:
  ```
  cd client
  npm start
  ```

## Accessing the Application
- The client will run on [http://localhost:3000/](http://localhost:3000/)
- The server will run on [http://localhost:3001/](http://localhost:3001/)

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.