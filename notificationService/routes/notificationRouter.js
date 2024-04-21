const express = require('express');
const notificationController = require('../controllers/notificationController');
const router = express.Router();

router.post('/send', async (req, res) => {
    try {
        const { userId, message } = req.body;
        const notification = await notificationController.sendEmailNotification(userId, message); // Correct function name
        res.status(200).json(notification);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
