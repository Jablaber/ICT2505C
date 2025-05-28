const Video = require('../models/Video');
const multer = require('multer');
const path = require('path');

// Set up multer for video uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

// Upload video function
exports.uploadVideo = (req, res) => {
    upload.single('video')(req, res, (err) => {
        if (err) {
            return res.status(500).json({ message: 'Error uploading video', error: err });
        }

        const newVideo = new Video({
            userId: req.body.userId,
            videoPath: req.file.path,
            description: req.body.description,
        });

        newVideo.save()
            .then(video => res.status(201).json({ message: 'Video uploaded successfully', video }))
            .catch(error => res.status(500).json({ message: 'Error saving video to database', error }));
    });
};

// Get all videos function
exports.getAllVideos = (req, res) => {
    Video.find()
        .then(videos => res.status(200).json(videos))
        .catch(error => res.status(500).json({ message: 'Error retrieving videos', error }));
};