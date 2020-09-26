//jshint esversion:6
const express = require("express");

const app = express();

app.get("/", function (req, res) {
    res.send("<h1>Hello, World!</h1>");
})

app.get("/contact", function (req, res) {
    res.send("Contact me at Byoo0522@gmail.com!");
});

app.get("/about", function (req, res) {
    res.send("My name is Ben and I'm a Web Developer.");
});

app.get("/hobbies", function (req, res) {
    res.send("Gaming, Coding, Golf, Beer");
});

app.listen(3000, function () {
    console.log("Server has started on port 3000");
});
