import RandomNumberGenerator from "../components/RandomNumberGenerator";

export default function Home() {
    return (
        <div>
            <RandomNumberGenerator />
        </div>
    );
}


const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

let randomNumber = Math.floor(Math.random() * 11);
let timestamp = Math.floor(Date.now() / 1000);

function updateNumber() {
    let currentTime = Math.floor(Date.now() / 1000);
    if (currentTime - timestamp >= 60) {
        randomNumber = Math.floor(Math.random() * 11);
        timestamp = currentTime;
    }
}

app.get('/random', (req, res) => {
    updateNumber();
    res.json({ number: randomNumber, timestamp });
});

app.listen(3000, () => console.log('Server running on port 3000'));

module.exports = app; // Required for Vercel
