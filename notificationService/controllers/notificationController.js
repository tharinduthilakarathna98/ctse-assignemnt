// const sgMail = require('@sendgrid/mail');
// const Notification = require('../models/notificationModel');

// sgMail.setApiKey(process.env.SENDGRID_API_KEY); // Set your SendGrid API key

// const sendEmailNotification = async (userId, message) => {
//     try {
//         const notification = await Notification.create({ userId, message });

//         const user = await User.findById(userId); // Assuming you have a User model
//         const userEmail = user.email; // Assuming user email is stored in the User model

//         const msg = {
//             to: userEmail,
//             from: 'samithadilshan59@gmail.com', // Set your sender email address
//             subject: 'New Notification',
//             text: message,
//             html: `<p>${message}</p>`,
//         };

//         await sgMail.send(msg);

//         return notification;
//     } catch (error) {
//         throw new Error(error.message);
//     }
// };

// module.exports = {
//     sendEmailNotification
// };


const sgMail = require('@sendgrid/mail');
const { User } = require('../../userService/models/userModel'); // Assuming User model is exported correctly
const Notification = require('../models/notificationModel');
const { redisClient } = require('../config/db_conn');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmailNotification = async (userId, message) => {
    try {
        const notification = await Notification.create({ userId, message });
   

            
        // Find user by ID
        const user = await User.findOne({ _id: userId });

        if (!user) {
            throw new Error('User not found');
        }

        const userEmail = user.email;

        const msg = {
            to: userEmail,
            from: 'samithadilshan59@gmail.com',
            subject: 'New Notification',
            text: message,
            html: `<p>${message}</p>`,
        };

        await sgMail.send(msg);
        redisClient.set(userId, JSON.stringify(msg)); // Example of using Redis for caching

        return notification;
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = { sendEmailNotification };
