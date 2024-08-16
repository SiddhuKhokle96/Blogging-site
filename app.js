const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser'); // Add this line if not using built-in middleware
const connectDB = require('./config/db');

const app = express();

// Enable CORS
const corsOptions = {
    origin: "http://localhost:5000",
    methods: "GET, POST,PUT,DELETE,PATCH,HEAD",
    credential: true,
  };
  
  //giving cors access
  app.use(cors(corsOptions));

// Parse JSON bodies
app.use(express.json()); // Built-in middleware for parsing JSON
app.use(bodyParser.urlencoded({ extended: true })); // For parsing URL-encoded bodies

// Routes
const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

const PORT = 5000;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server Fired!");
  });
});
