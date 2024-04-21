// const mongoose = require('mongoose');
// const redis = require('redis');
// require('dotenv').config();

// const redisClient = redis.createClient();

// // Promisify Redis functions for async/await usage
// // const getAsync = promisify(redisClient.get).bind(redisClient);
// // const setAsync = promisify(redisClient.set).bind(redisClient);

// const mongo_username = process.env.MONGO_USERNAME;
// const mongo_password = process.env.MONGO_PASSWORD;
// const mongo_cluster = process.env.MONGO_CLUSTER;
// const mongo_database = process.env.MONGO_DBNAME;


// // mongoose.connect(`mongodb+srv://${mongo_username}:${mongo_password}@${mongo_cluster}/${mongo_database}?retryWrites=true&w=majority`
// // , { useNewUrlParser: true, useUnifiedTopology: true })
// // .then(() => console.log(`Connected to: ${mongoose.connection.name}`))
// // .catch(err => console.log(err));

// mongoose.connect(
//     `mongodb+srv://samitha:sam123@microserviceproductclus.xolnz6u.mongodb.net/Microservice-products_app?socketTimeoutMS=30000&connectTimeoutMS=30000`,
//     { useNewUrlParser: true, useUnifiedTopology: true }
//   );
  
//   // Connection event handlers
//   const db = mongoose.connection;
//   db.on('error', console.error.bind(console, 'MongoDB connection error:'));
//   db.once('open', () => {
//     console.log('MongoDB connected successfully');
//   });




// module.exports = mongoose;


const mongoose = require('mongoose');
const redis = require('redis');
require('dotenv').config();

const redisClient = redis.createClient();

const mongo_username = process.env.MONGO_USERNAME;
const mongo_password = process.env.MONGO_PASSWORD;
const mongo_cluster = process.env.MONGO_CLUSTER;
const mongo_database = process.env.MONGO_DBNAME;

mongoose.connect(
    `mongodb+srv://samitha:sam123@microserviceproductclus.xolnz6u.mongodb.net/Microservice-products_app`,
    {
       
        socketTimeoutMS: 30000, // Increase socket timeout to 30 seconds
        connectTimeoutMS: 30000 // Increase connection timeout to 30 seconds
    }
);

// MongoDB connection event handlers
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('MongoDB connected successfully');
});

module.exports = { mongoose, redisClient };