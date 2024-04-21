// Load environment variables from .env file
require('dotenv').config();

const express = require('express');
const app = express(); // Create an Express app instance

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY); // Access SendGrid API key from environment variable

// Middleware to parse JSON bodies
app.use(express.json());

// Import notification router
const notificationRouter = require('./routes/notificationRouter');

// Use the notification router for notification endpoints
app.use('/notifications', notificationRouter);

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
