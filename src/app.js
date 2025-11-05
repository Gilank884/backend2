// src/app.js
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();

app.use(bodyParser.json());
app.use('/api', routes);

module.exports = app; // ✅ ekspor app, jangan listen di sini
