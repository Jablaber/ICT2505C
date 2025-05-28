import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditUserDetails = () => {
    const [userDetails, setUserDetails] = useState({
        name: '',
        address: '',
        age: '',
        medicalCondition: ''
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        // Fetch user details from the server
        const fetchUserDetails = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/user/details', { withCredentials: true });
                setUserDetails(response.data);
                setLoading(false);
            } catch (err) {
                setError('Failed to load user details');
                setLoading(false);
            }
        };

        fetchUserDetails();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserDetails({ ...userDetails, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put('http://localhost:3001/api/user/edit', userDetails, { withCredentials: true });
            alert('User details updated successfully');
        } catch (err) {
            setError('Failed to update user details');
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <h2>Edit User Details</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={userDetails.name} onChange={handleChange} required />
                </div>
                <div>
                    <label>Address:</label>
                    <input type="text" name="address" value={userDetails.address} onChange={handleChange} required />
                </div>
                <div>
                    <label>Age:</label>
                    <input type="number" name="age" value={userDetails.age} onChange={handleChange} required />
                </div>
                <div>
                    <label>Medical Condition:</label>
                    <input type="text" name="medicalCondition" value={userDetails.medicalCondition} onChange={handleChange} required />
                </div>
                <button type="submit">Update Details</button>
            </form>
        </div>
    );
};

export default EditUserDetails;