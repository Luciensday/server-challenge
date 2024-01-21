const express = require("express");
const server = express();

// function logger(request, response, next) {
//   console.log(request.method + " " + request.url);
//   next();
// }

// server.use(logger);

server.get("/", (request, response) => {
  response.send(`
  <h1>Hello Express</h1>
    `);
});

// const staticHandler = express.static("public")
// server.use(staticHandler)

server.get("/colour", (req, res) => {
  res.status(200);
  const hex = req.query.hex || "ffffff"; // defaults to white
  const html = `
    <style>
      body {
        background-color: #${hex};
      }
    </style>
    <form>
      <label for="hex">Enter hex</label>
      <input name="hex" value="${hex}">
    </form>
  `;
  res.send(html);
});

module.exports = server;
