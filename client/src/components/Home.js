import React from 'react';
import { Link } from 'react-router-dom';
import './styles/main.css';

const Home = () => {
    return (
        <div className="home-container">
            <h1>Welcome to Patient Buddy</h1>
            <p>Your companion for managing health and wellness.</p>
            <div className="home-links">
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
                <Link to="/about">About Us</Link>
            </div>
        </div>
    );
};

export default Home;