const http = require('http');
const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log("i'm middleware");
    next();
});

app.use((req, res, next) => {
    console.log("i another middleware");
});

const server = http.createServer(app);

server.listen(3010);