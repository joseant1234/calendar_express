const express = require('express');

const dotenv = require('dotenv')
dotenv.config();
const cors = require('cors');
const { dbConnection } = require('./database/config');

// server
const app = express();

// Database
dbConnection()
app.use(cors());

// Public directory
// va la ruta de la carpeta public
app.use(express.static('public'))

// Parse body
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));

// listen to requests
app.listen(process.env.PORT, () => {
    console.log(`Server running ${process.env.PORT}`)
});
