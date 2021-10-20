const { render } = require("ejs");
const express = require("express");
const routes = express.Router();

const views = __dirname + "/views/";
const viewsDash = __dirname + "/views/dashboard/";

// Router site
routes.get("/", (req, res) => res.render(views + "index"));
routes.get("/create", (req, res) => {
  res.render(views + "create");
});
routes.get("/login", (req, res) => {
  res.render(views + "login");
});

// Router dashboard
routes.get("/dashboard", (req, res) => res.render(viewsDash + "index"));

module.exports = routes;
