const express = require("express");

const app = express();

const projects = [
  {
    title: "E-Commerce Store",
    description:
      "A typical E-Commerce website for buying products. One gets to display their own products also.",
    tech: "Nodejs | EJS | MongoDB",
    github: "https://github.com/ndujesco/shop-website",
    website: "https://ugo-shop.herokuapp.com/",
  },
  {
    title: "All time favourite movies",
    description:
      "Here, you get movie recommendations by viewing user's all time favourite movies. You can also contribute by creating your own list!",
    tech: "Nodejs | EJS | MongoDB",
    github: "https://github.com/ndujesco/favourite-movies",
    website: "https://all-time-favourite.herokuapp.com/",
  },
  {
    title: "Blog Website",
    description:
      "A simple blog website where I put down random thoughts. Performs basic CRUD operations",
    github: "https://github.com/ndujesco/blog",
    website: "https://random-musings.herokuapp.com/",
    tech: "Flask | Jinja | Postgres",
  },
];
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/works", (req, res) => {
  res.render("projects", { projects });
});


app.use((req, res) => {
  const url = decodeURI(req.url);
  res.render("404", {url})
})
app.listen(process.env.PORT || 3000);
