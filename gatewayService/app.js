const express = require("express");
const dotenv = require("dotenv");
const logger = require("pino")();
const cors = require("cors");
const expressSession = require("express-session");
const proxy = require("express-http-proxy");

const app = express();
dotenv.config();

// Middleware
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true,
}));
app.use(express.json());
app.set("trust proxy", 1);

const sessSettings = expressSession({
  secret: "oursecret",
  resave: true,
  saveUninitialized: true,
  cookie: {
    secure: false, // For development, you can set it to true in production if using HTTPS
    maxAge: 360000,
  },
});
app.use(sessSettings);

// Proxy middleware
app.use("/user", proxy('http://localhost:3002'));
app.use("/product", proxy('http://localhost:3003'));
app.use("cart", proxy('http://localhost:3004'));
app.use("/order", proxy('http://localhost:3005'));
app.use("/notification", proxy('http://localhost:3006'));

// Sample route to check if the gateway is running
app.get("/", (req, res) => {
  res.status(200).json({ message: "Gateway Server is running!" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  logger.info(`Gateway Server is running on PORT: ${PORT}`);
});