-- Drop the user if it exists
DROP USER IF EXISTS 'patient_buddy_user'@'localhost';

-- Create the database if it doesn't exist
CREATE DATABASE IF NOT EXISTS patient_buddy;

-- Create the user with native password authentication
CREATE USER 'patient_buddy_user'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password123';

-- Grant privileges
GRANT ALL PRIVILEGES ON patient_buddy.* TO 'patient_buddy_user'@'localhost';

-- Apply the changes
FLUSH PRIVILEGES;

-- Verify the user was created
SELECT user, host, plugin FROM mysql.user WHERE user = 'patient_buddy_user'; 