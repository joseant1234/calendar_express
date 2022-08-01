const express = require('express');

// server
const app = express();

// Routes
app.get('/', (req, res) => {
    res.json({
        ok: true
    })
})

// listen to requests
app.listen(3001, () => {
    console.log(`Server running ${3001}`)
});
