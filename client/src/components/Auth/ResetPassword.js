import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const ResetPassword = () => {
    const [email, setEmail] = useState('');
    const [code, setCode] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [message, setMessage] = useState('');
    const history = useHistory();

    const handleResetRequest = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/api/auth/reset-password', { email });
            setMessage(response.data.message);
        } catch (error) {
            setMessage('Error sending reset code. Please try again.');
        }
    };

    const handlePasswordReset = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/api/auth/reset-password/confirm', { email, code, newPassword });
            setMessage(response.data.message);
            if (response.data.success) {
                history.push('/login');
            }
        } catch (error) {
            setMessage('Error resetting password. Please check your code and try again.');
        }
    };

    return (
        <div className="reset-password">
            <h2>Reset Password</h2>
            <form onSubmit={handleResetRequest}>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button type="submit">Send Reset Code</button>
            </form>
            <form onSubmit={handlePasswordReset}>
                <input
                    type="text"
                    placeholder="Enter reset code"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Enter new password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                />
                <button type="submit">Reset Password</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default ResetPassword;