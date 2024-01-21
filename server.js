const express = require("express");
const server = express();

// function logger(request, response, next) {
//   console.log(request.method + " " + request.url);
//   next();
// }

// server.use(logger);

server.get("/", (request, response) => {
  response.send(`
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Home</title>
        <link rel="stylesheet" href="/style.css">
      </head>
      <body>
        <h1>Hello Express</h1>
      </body>
    </html>
    
    `);
});

module.export = server;
