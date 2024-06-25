require('dotenv').config();
const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.get('/ht', (req, res) => {
    res.send('<h1 style="text-align: center;">Hello World</h1>');
})

app.listen(process.env.PORT, () => {
    console.log(`example app listening on port no ${process.env.PORT}`);
})