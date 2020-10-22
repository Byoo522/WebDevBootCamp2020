const express = require("express");
const https = require("https");

const app = express();

app.get("/", function (req, res) {

    const url = "https://api.openweathermap.org/data/2.5/weather?q=Los Angeles&appid=3c16fe54dae4f2afaf5008bc751d883e&units=imperial"
    https.get(url, function (response) {
        console.log(response.statusCode);

        response.on("data", function (data) {
            const weatherData = JSON.parse(data)
            const temp = weatherData.main.temp
            const weatherDescription = weatherData.weather[0].description
            const icon = weatherData.weather[0].icon
            const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
            res.write("<h1>The temperature in Los Angeles is " + temp + " degrees Farenheit.</h1>");
            res.write("<h1>The weather is currently " + weatherDescription + ".</h1>");
            res.write("<img src=" + imageURL + ">");
            res.send()
        })
    })
})





app.listen(3000, function () {
    console.log("Server is running on port 3000.");
})