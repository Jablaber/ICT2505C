import React, { useState } from 'react';
import axios from 'axios';

const VideoUpload = () => {
    const [videoFile, setVideoFile] = useState(null);
    const [instructions, setInstructions] = useState('');

    const handleFileChange = (event) => {
        setVideoFile(event.target.files[0]);
    };

    const handleInstructionsChange = (event) => {
        setInstructions(event.target.value);
    };

    const handleUpload = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('video', videoFile);
        formData.append('instructions', instructions);

        try {
            const response = await axios.post('http://localhost:3001/api/videos/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            alert('Video uploaded successfully: ' + response.data.message);
        } catch (error) {
            console.error('Error uploading video:', error);
            alert('Failed to upload video. Please try again.');
        }
    };

    return (
        <div className="video-upload">
            <h2>Upload Video for Timed Up and Go Test / Five-times Sit to Stand Test</h2>
            <form onSubmit={handleUpload}>
                <div>
                    <label htmlFor="video">Select Video:</label>
                    <input type="file" id="video" accept="video/*" onChange={handleFileChange} required />
                </div>
                <div>
                    <label htmlFor="instructions">Instructions:</label>
                    <textarea id="instructions" value={instructions} onChange={handleInstructionsChange} required />
                </div>
                <button type="submit">Upload Video</button>
            </form>
        </div>
    );
};

export default VideoUpload;