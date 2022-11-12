// dependencias
const express = require("express");
const db = require("./database");
const morgan = require("morgan");
const Menu = require("./models/Menu");

const app = express();

app.use(express.json());
app.use(morgan("dev"));

//Default
app.get("/", (req, res) => {
  res.send("Menu bar....");
});

// rutas de la API
//Listar todos los platos del menu
app.get("/v1/menu", async (req, res) => {
  try {
    const menuList = await Menu.find();
    res.status(200).json({
      status: "Listado de platos",
      data: menuList,
    });
  } catch (error) {
    res.status(404).json({
      status: "No hay menu",
      message: error.message,
    });
  }
});

//Traer un solo plato
app.get("/v1/menu/:cod_plato", async (req, res) => {
  try {
    const menu = await Menu.findOne({ cod_plato: req.params.cod_plato });
    res.status(200).json({
      status: menu ? "Plato encontrado" : "Plato no existe",
      data: menu,
    });
  } catch (error) {
    res.status(404).json({
      status: "No existe el Plato",
      message: error.message,
    });
  }
});

//Listar platos por categoria
app.get("/v1/menu/category/:categoria", async (req, res) => {
  try {
    const menu = await Menu.find({ categoria: req.params.categoria });
    res.status(200).json({
      status: menu ? "Categoria encontrada" : "No existe la Categoria",
      data: menu,
    });
  } catch (error) {
    res.status(404).json({
      status: "No existe la Categoria",
      message: error.message,
    });
  }
});

//Agregar un plato al menu
app.post("/v1/menu", async (req, res) => {
  try {
    const menu = Menu(req.body);
    const menuSave = await menu.save();
    res.status(201).json({
      status: "Se guardo el plato",
      data: menuSave,
    });
  } catch (error) {
    res.status(404).json({
      status: "Error no se pudo guardar",
      message: error.message,
    });
  }
});

//Modificar un plato del menu
app.patch("/v1/menu/:cod_plato", async (req, res) => {
  try {
    //const menu = await Menu.update({cod_plato: req.params.cod_plato}, {req.body});
    const menu = await Menu.find({ categoria: req.params.categoria });
    menu = Menu(reg.body);
    const menuSave = await menu.save();
    res.status(200).json({
      status: menuSave ? "Se actualizo el plato" : "No existe el plato",
      data: menuSave,
    });
  } catch (error) {
    res.status(404).json({
      status: "No se existe el plato para actualizar",
      message: error,
    });
  }
});

//Eliminar un Plato del menu
app.delete("/v1/menu/:cod_plato", async (req, res) => {
  try {
    const menu = await Menu.deleteOne({ cod_plato: req.params.cod_plato });
    res.status(200).json({
      status: menu ? "Se elimino el plato" : "No existe el plato",
      data: menu,
    });
  } catch (error) {
    res.status(404).json({
      status: "No se existe el plato a eliminar",
      message: error,
    });
  }
});

//puerto donde levanta el servidor
app.listen(3000);
console.log("Servidor corriendo en el puerto 3000");
