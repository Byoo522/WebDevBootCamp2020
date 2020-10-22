const express = require("express");
const https = require("https");

const app = express();

app.get("/", function (req, res) {

    const url = "https://api.openweathermap.org/data/2.5/weather?q=Los Angeles&appid=3c16fe54dae4f2afaf5008bc751d883e&units=imperial"
    https.get(url, function (response) {
        console.log(response.statusCode);

        response.on("data", function (data) {
            const weatherData = JSON.parse(data)
            console.log(weatherData);
            const temp = weatherData.main.temp
            console.log(temp);
            const weatherDescription = weatherData.weather[0].description
            console.log(weatherDescription);
        })
    })
    res.send("Server is up and running.")
})





app.listen(3000, function () {
    console.log("Server is running on port 3000.");
})