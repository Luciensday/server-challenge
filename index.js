const server = require("./server.js");

const PORT = process.env.PORT || 3000;
server.listen(PORT, () =>
  console.log(`listening at http://localhost:${PORT} `),
);
