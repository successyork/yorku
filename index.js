const express = require("express");
const app = express();

app.use(express.static(__dirname + "/static"));

app.get("/", (request, response) => {
  response.sendFile("index.html");
});

app.get("/about-us", (request, response) => {
  response.sendFile(__dirname + "/static/about.html");
});

app.get("/words", (request, response) => {
  response.sendFile(__dirname + "/static/words.html");
});

app.get("/contact-us", (request, response) => {
  response.sendFile(__dirname + "/static/contact.html");
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
