const User = require('../models/User');

// Register a new user
exports.registerUser = async (req, res) => {
    const { userId, task, admin } = req.body;
    try {
        const newUser = new User({ userId, task, admin });
        await newUser.save();
        res.status(201).json({ message: 'Assignment uploaded successfully', newUser });
    } catch (error) {
        res.status(500).json({ message: 'Error uploading assignment', error });
    }
};

// Fetch all admins
exports.fetchAllAdmins = async (req, res) => {
    // For simplicity, returning a static list of admins
    const admins = [{ username: 'Alok' }, { username: 'Ravi' }];
    res.status(200).json(admins);
};

