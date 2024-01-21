// server.js
const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

// Connect to MongoDB (replace 'your_mongodb_uri' with your actual MongoDB connection string)
mongoose.connect('mongodb+srv://sherabhai:shera1928@cluster0.i5iytse.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));

// Set up multer for handling file uploads
const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// Define a mongoose model for storing uploaded data
const Upload = mongoose.model('Upload', {
  name: String,
  description: String,
  subject: String,
  fileUrl: String,
});

// API endpoint for handling form submissions
app.post('/api/upload', upload.single('image'), async (req, res) => {
  try {
    // Create a new document in MongoDB with uploaded data
    const newUpload = new Upload({
      name: req.body['Name'],
      description: req.body['Desc'],
      subject: req.body['Related'],
      fileUrl: req.file.path,
    });

    const savedUpload = await newUpload.save();
    console.log({ success: true, message: 'Data uploaded successfully', upload: savedUpload });
  } catch (error) {
    console.error('Error uploading data:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
