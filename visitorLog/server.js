// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/visitorLogs', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Create a schema and model for visitor logs
const visitorSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
    timestamp: { type: Date, default: Date.now },
});

const Visitor = mongoose.model('Visitor', visitorSchema);

// Endpoint to log visitor
app.post('/log', async (req, res) => {
    const { name, email, message } = req.body;
    const visitor = new Visitor({ name, email, message });
    await visitor.save();
    res.status(201).send(visitor);
});

// Endpoint to get all visitors
app.get('/visitors', async (req, res) => {
    const visitors = await Visitor.find();
    res.status(200).send(visitors);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});