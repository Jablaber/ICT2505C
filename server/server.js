const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database connection configuration
const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  authPlugins: {
    mysql_native_password: () => () => Buffer.from(process.env.DB_PASSWORD)
  }
};

// Log the database configuration (without password)
console.log('Attempting to connect with configuration:', {
  host: dbConfig.host,
  user: dbConfig.user,
  database: dbConfig.database
});

// Create a connection pool
const pool = mysql.createPool(dbConfig);

// Test the connection
pool.getConnection((err, connection) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    if (err.code === 'ER_ACCESS_DENIED_ERROR') {
      console.error('Access denied. Please check your database credentials in the .env file.');
      console.error('Current configuration:', {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        database: process.env.DB_NAME
      });
      
      // Try to connect without database to check if user exists
      const tempConfig = { ...dbConfig };
      delete tempConfig.database;
      const tempPool = mysql.createPool(tempConfig);
      
      tempPool.getConnection((tempErr, tempConn) => {
        if (tempErr) {
          console.error('Error connecting without database:', tempErr);
          console.error('This suggests the user might not exist or has incorrect password');
        } else {
          console.log('Successfully connected without database - user exists');
          tempConn.release();
        }
        tempPool.end();
      });
    } else if (err.code === 'ER_BAD_DB_ERROR') {
      console.error('Database does not exist. Please create the database first.');
    }
    return;
  }
  
  console.log('Successfully connected to MySQL database');
  connection.release();
});

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Patient Buddy API' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 