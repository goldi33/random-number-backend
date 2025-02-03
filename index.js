const cors = require('cors');

module.exports = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');

    let randomNumber = Math.floor(Math.random() * 11);
    let timestamp = Math.floor(Date.now() / 1000);

    res.json({ number: randomNumber, timestamp });
};
