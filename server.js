const jsonServer = require("json-server");
const path = require("path");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

const PORT = 3000;

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
  // if (req.method === "POST") {
  //   req.body.createdAt = Date.now();
  // }

  next();
});

// Use default router
server.use(router);
server.listen(PORT, () => {
  console.log(`JSON Server is running at port ${PORT}`);
});
