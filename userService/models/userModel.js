// const mongoose = require("mongoose");

// const userSchema = mongoose.Schema({
//     email: {
//         type: String,
//         required: [true, "Please enter your email"]
//     },

//     password: {
//         type: String,
//         required: [true, "Please enter your password"]
//     },
//     firstName: {
//         type: String,
//         required: [true, "Please enter your first name"]
//     },
    
//     lastName: {
//         type: String,
//         required: [true, "Please enter your last name"]
//     },
    
//     age: {
//         type: Number,
//         required: [true, "Please enter your age"]
//     },
    
//     phone: {
//         type: String,
//         required: [true, "Please enter your phone number"]
//     },
    
//     gender: {
//         type: String,
//         // enum: ['male', 'female']
//     }

// },
// {
// timestamps: true
// }
// )

// module.exports = mongoose.model("User", userSchema);



const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    firstName: String,
    lastName: String,
    age: Number,
    phone: String,
    gender: String,
    notifications: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Notification'
        }
    ]
});

module.exports = mongoose.model('User', userSchema);
