const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.example.com', // Replace with your SMTP server
    port: 587, // Replace with your SMTP port
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'your-email@example.com', // Replace with your email
        pass: 'your-email-password' // Replace with your email password
    }
});

const sendEmail = (to, subject, text) => {
    const mailOptions = {
        from: '"Patient Buddy" <your-email@example.com>', // sender address
        to: to, // list of receivers
        subject: subject, // Subject line
        text: text // plain text body
    };

    return transporter.sendMail(mailOptions);
};

module.exports = {
    sendEmail
};