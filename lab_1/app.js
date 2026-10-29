const express = require("express");
const app = express();

app.get("/", (request, response) => {
    response.send("Welcome to Node.js and Express");
});

app.get("/about", (request, response) => {
    response.json({
        name: "LOHITH SAI G",
        section: "AI/DE - 2A [106]"
    });
});

app.get("/time", (request, response) => {
    let date = new Date();
    response.send(`Today's date and time is ${date}`);
});

app.use((request, response) => {
    response.status(404).send("404 - Page not found");
});

app.listen(3000, () => {
    console.log('server is running http://localhost:3000/')
});