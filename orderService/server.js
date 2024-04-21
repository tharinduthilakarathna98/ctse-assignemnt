const express = require('express');
const cors = require('cors');
const app = express();


require('dotenv').config();
require('./config/db_conn');
const port = process.env.PORT || 9001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use("/orders", require("./routes/orderRouter"))



app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});