const express = require("express");

const server = express();

server.get("/", (req, res) => {
  res.send(`<h1>Hello Express</h1>`);
});

server.get("/colour", (req, res) => {
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

const cheeses = [];

server.get("/cheese", (req, res) => {
  const list = cheeses.map((cheese) => {
    return `<li>${cheese.name} | ${cheese.rating} stars</li>`;
  });
  const html = `
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Cheese</title>
      <style>
          body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 0;
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100vh;
              background-color: #f4f4f4;
          }
  
  
          label {
              display: block;
              margin-bottom: 8px;
              color: blue
          }
  
          input {
              width: 100%;
              padding: 8px;
              margin-bottom: 16px;
              box-sizing: border-box;
          }
  
          button {
              background-color: #4caf50;
              color: #fff;
              padding: 10px;
              border: none;
              border-radius: 4px;
              cursor: pointer;
          }
      </style>
  </head>
  <body>
    <form method="POST" id="cheeseForm">
      <p>
        <label for="name">Cheese name</label>
        <input name="name">
      </p>
      <p>
        <label for="rating">Cheese rating</label>
        <input name="rating" type="range" min="0" max="5" step="0.5">
      </p>
      <button type="submit" form="cheeseForm">Rate your cheese</button>
    </form>
    <ul>
      ${list.join("")}
    </ul>
    </body>
</html>
  `;
  res.send(html);
});

server.post("/cheese", express.urlencoded({ extended: false }), (req, res) => {
  const name = req.body.name;
  const rating = req.body.rating;
  cheeses.push({ name, rating });
  res.redirect("/cheese");
});

module.exports = server;
