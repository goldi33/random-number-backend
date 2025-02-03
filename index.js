const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

let randomNumber = Math.floor(Math.random() * 11);
let timestamp = Math.floor(Date.now() / 1000);

app.get('/random', (req, res) => {
    let currentTime = Math.floor(Date.now() / 1000);
    if (currentTime - timestamp >= 60) {
        randomNumber = Math.floor(Math.random() * 11);
        timestamp = currentTime;
    }
    res.json({ number: randomNumber, timestamp });
});

module.exports = app; // Important for Vercel
