const express = require('express');
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/health", (req, res) => {
    res.status(200).send("healthy");
});

app.listen(PORT, () => {
    console.log("App is running...");
});
