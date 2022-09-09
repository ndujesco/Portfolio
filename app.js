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
    description: `Came across <a style='color:  #f6c688;' href='https://startbootstrap.com/previews/clean-blog/' target='_blank'>this blog template <a/>and decided to modify and give it a backend. Here I performed basic CRUD operations and worked on database relationships.`,
    github: "https://github.com/ndujesco/blog-nodejs",
    website: "https://random-musings.herokuapp.com/",
    tech: "Nodejs | Python | Flask | MongoDB",
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
  res.render("404", { url });
});
app.listen(process.env.PORT || 3000);
