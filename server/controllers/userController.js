const User = require('../models/User');
const nodemailer = require('nodemailer');
const crypto = require('crypto');

// Create a new user
exports.createUser = async (req, res) => {
    const { name, address, age, medicalCondition } = req.body;
    try {
        const newUser = new User({ name, address, age, medicalCondition });
        await newUser.save();
        res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
        res.status(500).json({ message: 'Error creating user', error });
    }
};

// Edit user details
exports.editUserDetails = async (req, res) => {
    const { userId } = req.params;
    const { name, address, age, medicalCondition } = req.body;
    try {
        const updatedUser = await User.findByIdAndUpdate(userId, { name, address, age, medicalCondition }, { new: true });
        res.status(200).json({ message: 'User details updated successfully', user: updatedUser });
    } catch (error) {
        res.status(500).json({ message: 'Error updating user details', error });
    }
};

// Change password
exports.changePassword = async (req, res) => {
    const { userId } = req.params;
    const { newPassword } = req.body;
    try {
        const user = await User.findById(userId);
        user.password = newPassword; // Ensure to hash the password before saving
        await user.save();
        res.status(200).json({ message: 'Password changed successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error changing password', error });
    }
};

// Send password reset email
exports.resetPassword = async (req, res) => {
    const { email } = req.body;
    const resetToken = crypto.randomBytes(32).toString('hex');
    // Save the reset token to the user's record in the database (not shown here)
    
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASSWORD,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: 'Password Reset',
        text: `You requested a password reset. Use this token: ${resetToken}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).json({ message: 'Error sending email', error });
        }
        res.status(200).json({ message: 'Password reset email sent' });
    });
};