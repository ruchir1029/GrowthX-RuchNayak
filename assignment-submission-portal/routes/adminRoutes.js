const express = require('express');
const {
    loginAdmin,
    viewAssignments,
    acceptAssignment,
    rejectAssignment,
} = require('../controllers/adminController');

const router = express.Router();

router.post('/login', loginAdmin);
router.get('/assignments', viewAssignments);
router.post('/assignments/:id/accept', acceptAssignment);
router.post('/assignments/:id/reject', rejectAssignment);

module.exports = router;



