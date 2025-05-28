import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { login } from '../../services/auth';
import QRCode from 'qrcode.react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showQRCode, setShowQRCode] = useState(false);
    const [error, setError] = useState('');
    const history = useHistory();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await login(email, password);
            history.push('/dashboard');
        } catch (err) {
            setError('Invalid email or password');
        }
    };

    const toggleQRCode = () => {
        setShowQRCode(!showQRCode);
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleLogin}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
            <button onClick={toggleQRCode}>
                {showQRCode ? 'Hide QR Code' : 'Show QR Code for SingPass'}
            </button>
            {showQRCode && <QRCode value="Your SingPass QR Code Value" />}
        </div>
    );
};

export default Login;