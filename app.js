const express = require("express");

const app = express();

const projects = [
  {
    title: "TekTalk API",
    description: `TekTalk is a social network aimed for tech driven individuals to be able to meet like minded individuals for whatever reason it may be. It is made for but not limited to techies. Tektalkalso welcomes everyone, guests included.`,
    tech: "Nodejs | MongoDB",
    github: "https://github.com/ndujesco/tek-talk-api",
    website: "https://tektalk.vercel.app/",
  },
  {
    title: "E-Commerce Store",
    description:
      "A typical E-Commerce website for buying products. One gets to display their own products also.",
    tech: "Nodejs | EJS | MongoDB",
    github: "https://github.com/ndujesco/shop-website",
    website: "https://ugo-shop.up.railway.app/",
  },
  {
    title: "All time favourite movies",
    description:
      "Here, you get movie recommendations by viewing user's all time favourite movies. You can also contribute by creating your own list!",
    tech: "Nodejs | EJS | MongoDB",
    github: "https://github.com/ndujesco/favourite-movies",
    website: "https://all-time-favourite.up.railway.app/",
  },
  {
    title: "Blog Website",
    description: `Came across <a style='color:  #f6c688;' href='https://startbootstrap.com/previews/clean-blog/' target='_blank'>this blog template <a/>and decided to modify and give it a backend. Here I performed basic CRUD operations and worked on database relationships.`,
    github: "https://github.com/ndujesco/blog-nodejs",
    website: "https://random-musings.up.railway.app/",
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
