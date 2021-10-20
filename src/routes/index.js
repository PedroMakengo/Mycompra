const express = require("express");
const routes = express.Router();

const views = __dirname + "/views/";
const viewsDash = __dirname + "/views/dashboard";

routes.get("/", (req, res) => {
  res.render(views + "index");
});

routes.get("/create", (req, res) => {
  res.render(views + "create");
});

routes.get("/login", (req, res) => {
  res.render(views + "login");
});

module.exports = routes;
