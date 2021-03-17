const express = require('express');
const connection = require('./database/database');
const app = require('./config');

app.listen(8080, (req, res) => {
    console.log("Server is running!");
})
