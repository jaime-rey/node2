const http = require("http");
const path = require("path");
const fs = require("fs");
const fsPromises = fs.promises;

const logEvents = require("./logEvents");
const EventEmitter = require("events");

class Emitter extends EventEmitter {}

const myEmitter = new Emitter();

const PORT = process.env.PORT || 3500;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello World!");
    console.log(req.url);
    console.log(req.method);
    console.log(req.headers);
});

server.listen(PORT, console.log(`Server running at http://localhost:${PORT}`));

/* myEmitter.on("log", (msg) => logEvents(msg));

    myEmitter.emit("log", "Log event emitted!"); */

