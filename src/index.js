//import { Plato } from '/models/Plato'

const { json, response } = require("express");
const express = require("express");
const db = require("./database");

const app = express();

const menu = [
    {cod_plato: "EMC", nombre: "Empanada de carne", descripcion: "Empanada de carne Frita", precio: 200, categoria: "Entrada", activo: true},
    {cod_plato: "TP", nombre: "Tortilla", descripcion: "Tortilla de papa y cebolla", precio: 500, categoria: "Entrada", activo: true},
    {cod_plato: "TE", nombre: "Tortilla Española", descripcion: "Tortilla de papa, cebolla y chorizo colorado", precio: 700, categoria: "Entrada", activo: true},
    {cod_plato: "BU", nombre: "Buñuelos", descripcion: "Buñuelos de Acelga", precio: 400, categoria: "Entrada", activo: true},
    {cod_plato: "SMC", nombre: "Sandwich de Milanesa", descripcion: "Sandwich de Milanesa de carne", precio: 1500, categoria: "Principal", activo: true},
    {cod_plato: "SMP", nombre: "Sandwich de Milanesa de Pollo", descripcion: "Sandwich de Milanesa de pollo", precio: 1400, categoria: "Principal", activo: false},
    {cod_plato: "VI", nombre: "Vigilante", descripcion: "Queso fresco y Dulce de Batata", precio: 300, categoria: "Postre", activo: true},
    {cod_plato: "FL", nombre: "Flan", descripcion: "Flan cacero", precio: 400, categoria: "Postre", activo: true},
];

app.get("/", (req, res) => {
  res.send("Menu bar....");
});

app.get("/v1/menu", (req, res) => {
  // trae todo el menu
  
  response.json(menu);
  res.status(200).send("GET menu");
  console.log(req.method, req.path);
});

app.get("/v1/menu/:id", (req, res) => {
  res.status(200).send("GET menu por id");
  console.log(req.method, req.path);
});

app.get("/v1/menu/:category", (req, res) => {
  res.status(200).send("GET menu por categoria");
  console.log(req.method, req.path);
});

app.post("/v1/menu", async (req, res) => {
  const plato = json;
  const savePlato = await plato.save();

  res.status(201).send("Plato Agregado");
  console.log(req.method, req.path); 
});

app.patch("/v1/menu/:id", (req, res) => {
  res.status(200).send("PATCH plato por id");
  console.log(req.method, req.path);
});

app.delete("/v1/menu/:id", (req, res) => {
  res.status(200).send("DELETE plato por id");
  console.log(req.params.id);
});

//puerto donde levanta el servidor
app.listen(3000);
console.log("Servidor corriendo en el puerto 3000");
