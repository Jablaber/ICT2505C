import axios from 'axios';

const API_URL = 'http://localhost:3001/api';

// User registration
export const registerUser = async (userData) => {
    const response = await axios.post(`${API_URL}/auth/register`, userData);
    return response.data;
};

// User login
export const loginUser = async (credentials) => {
    const response = await axios.post(`${API_URL}/auth/login`, credentials);
    return response.data;
};

// Password reset
export const resetPassword = async (email) => {
    const response = await axios.post(`${API_URL}/auth/reset-password`, { email });
    return response.data;
};

// Edit user details
export const editUserDetails = async (userId, userDetails) => {
    const response = await axios.put(`${API_URL}/user/${userId}`, userDetails);
    return response.data;
};

// Change password
export const changePassword = async (userId, passwordData) => {
    const response = await axios.put(`${API_URL}/user/${userId}/change-password`, passwordData);
    return response.data;
};

// Upload video
export const uploadVideo = async (videoData) => {
    const formData = new FormData();
    formData.append('video', videoData);
    const response = await axios.post(`${API_URL}/video/upload`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
    return response.data;
};