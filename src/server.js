const express = require("express");
const server = express();
const routes = require("./routes");

// Usando o template engine do javascript
server.set("view engine", "ejs");

// Habilitar arquivos statics
server.use(express.static("public"));

// Usar o req.body
server.use(express.urlencoded({ extended: true }));

// Routes
server.use(routes);

server.listen(8080, () => console.log("Servindo rodando"));
