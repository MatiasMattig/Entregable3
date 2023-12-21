const ProductManger = require("./productManager.js");

const manager = new ProductManger("./products.json");

const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Mi primera chamba, pero con Express");
})

const PUERTO = 8080;

app.listen(PUERTO, () => {
    console.log(`Escuchando en http://localhost:${PUERTO}`);
})