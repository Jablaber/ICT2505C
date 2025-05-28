const express = require('express');
const multer = require('multer');
const videoController = require('../controllers/videoController');
const router = express.Router();

// Set up multer for video uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Directory to save uploaded videos
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname); // Unique filename
    }
});

const upload = multer({ storage: storage });

// Route for uploading videos
router.post('/upload', upload.single('video'), videoController.uploadVideo);

// Route for retrieving videos (if needed)
router.get('/:id', videoController.getVideo);

module.exports = router;