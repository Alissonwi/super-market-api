require("dotenv").config({
  path: process.env.NODE_ENV === "production" ? ".env.production" : ".env"
});

const server = require("./server");

var port = process.env.PORT || 3000;

console.log(`Service online at port ${port}`);

server.listen(port);
