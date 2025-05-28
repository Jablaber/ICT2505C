const User = require('../models/User');
const nodemailer = require('../config/nodemailer');
const jwt = require('jsonwebtoken');
const QRCode = require('qrcode');

// User registration
exports.register = async (req, res) => {
    const { name, address, age, medicalCondition, email, password } = req.body;
    try {
        const newUser = new User({ name, address, age, medicalCondition, email, password });
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error registering user' });
    }
};

// User login
exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user || !(await user.comparePassword(password))) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        const qrCode = await QRCode.toDataURL(user.singPassId); // Assuming singPassId is stored in user model
        res.status(200).json({ token, qrCode });
    } catch (error) {
        res.status(500).json({ error: 'Error logging in' });
    }
};

// Password reset
exports.resetPassword = async (req, res) => {
    const { email } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        const resetToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '15m' });
        await nodemailer.sendResetEmail(email, resetToken);
        res.status(200).json({ message: 'Reset password email sent' });
    } catch (error) {
        res.status(500).json({ error: 'Error sending reset email' });
    }
};

// Two-factor authentication verification
exports.verifyTwoFactorAuth = async (req, res) => {
    const { token } = req.body;
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json({ message: 'Two-factor authentication successful' });
    } catch (error) {
        res.status(401).json({ error: 'Invalid or expired token' });
    }
};