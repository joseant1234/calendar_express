const express = require('express');

const dotenv = require('dotenv')
dotenv.config();

// server
const app = express();

// Public directory
// va la ruta de la carpeta public
app.use(express.static('public'))

// Routes
app.use('/api/auth', require('./routes/auth'));

// listen to requests
app.listen(process.env.PORT, () => {
    console.log(`Server running ${process.env.PORT}`)
});
