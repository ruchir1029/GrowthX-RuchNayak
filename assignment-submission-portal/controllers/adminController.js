const User = require('../models/User');

// Admin login simulation (no password logic for simplicity)
exports.loginAdmin = async (req, res) => {
    const { username } = req.body;
    // Just return the username as a success message
    res.status(200).json({ message: `Welcome, ${username}` });
};

// View assignments tagged to the admin
exports.viewAssignments = async (req, res) => {
    const adminName = req.body.username; // Assume admin's username is sent in the body
    try {
        const assignments = await User.find({ admin: adminName });
        res.status(200).json(assignments);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching assignments', error });
    }
};

// Accept an assignment
exports.acceptAssignment = async (req, res) => {
    const { id } = req.params;
    try {
        const assignment = await User.findById(id);
        if (!assignment) {
            return res.status(404).json({ message: 'Assignment not found' });
        }
        res.status(200).json({ message: 'Assignment accepted', assignment });
    } catch (error) {
        res.status(500).json({ message: 'Error accepting assignment', error });
    }
};

// Reject an assignment
exports.rejectAssignment = async (req, res) => {
    const { id } = req.params;
    try {
        const assignment = await User.findByIdAndDelete(id);
        if (!assignment) {
            return res.status(404).json({ message: 'Assignment not found' });
        }
        res.status(200).json({ message: 'Assignment rejected', assignment });
    } catch (error) {
        res.status(500).json({ message: 'Error rejecting assignment', error });
    }
};



