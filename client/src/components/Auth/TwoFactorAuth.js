import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { sendTwoFactorCode } from '../../services/auth';

const TwoFactorAuth = ({ onVerify }) => {
    const [code, setCode] = useState('');
    const [error, setError] = useState('');
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const isValid = await onVerify(code);
            if (isValid) {
                history.push('/dashboard');
            } else {
                setError('Invalid code. Please try again.');
            }
        } catch (err) {
            setError('An error occurred. Please try again later.');
        }
    };

    return (
        <div className="two-factor-auth">
            <h2>Two-Factor Authentication</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="code">Enter the code sent to your email:</label>
                    <input
                        type="text"
                        id="code"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        required
                    />
                </div>
                {error && <p className="error">{error}</p>}
                <button type="submit">Verify</button>
            </form>
        </div>
    );
};

export default TwoFactorAuth;