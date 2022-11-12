// dependencias
const express = require("express");
const db = require("./database");
const morgan = require("morgan");
const Menu = require("./models/Menu");

const app = express();

app.use(express.json());
app.use(morgan("dev"));

//Default
app.get("/", (req, res, next) => {
  res.send("Menu bar....");
  next();
});

// rutas de la API
//Listar todos los platos del menu
app.get("/v1/menu", async (req, res, next ) => {
  try {
    const menuList = await Menu.find();
    res.status(200).json({
      status: "Listado de platos",
      data: menuList,
    });
    next();
  } catch (error) {
    res.status(404).json({
      status: "No hay menu",
      message: error.message,
    });
    next();
  }
});

//Traer un solo plato
app.get("/v1/menu/:cod_plato", async (req, res) => {
  try {
    const menu = await Menu.findOne({ cod_plato: req.params.cod_plato });
    res.status(200).json({
      status: menu ? "Plato encontrado con exito" : "Plato no encontrado",
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
app.get("/v1/menu/category/:categoria", async (req, res, next) => {
  try {
    const menu = await Menu.find({ categoria: req.params.categoria });
    res.status(200).json({
      status: menu ? "Categoria encontrada con exito" : "No existe la Categoria",
      data: menu,
    });
    next();
  } catch (error) {
    res.status(404).json({
      status: "No existe la Categoria",
      message: error.message,
    });
    next();
  }
});

//Agregar un plato al menu
app.post("/v1/menu", async (req, res, next) => {
  try {
    const menu = Menu(req.body);
    const menuSave = await menu.save();
    res.status(201).json({
      status: "Se guardo el plato con exito",
      data: menuSave,
    });
    next();
  } catch (error) {
    res.status(404).json({
      status: "Error no se pudo guardar",
      message: error.message,
    });
    next();
  }
});

//Modificar un plato del menu
app.patch("/v1/menu/:cod_plato", async (req, res, next) => {
  try {
    let body = req.body;
    const menuUpdate = await Menu.findOneAndUpdate(
      { cod_plato: req.params.cod_plato },
      {
        $set: req.body,
      }
    );
    res.status(200).json({
      status: menuUpdate ? "Se actualizo el plato con exito" : "No existe el plato",
      data: Menu.findOne({ cod_plato: req.params.cod_plato }),
    });
    next();
  } catch (error) {
    res.status(404).json({
      status: "No se existe el plato para actualizar",
      message: error,
    });
    next();
  }
});

//Eliminar un Plato del menu
app.delete("/v1/menu/:cod_plato", async (req, res) => {
  try {
    const menu = await Menu.findOneAndDelete({ cod_plato: req.params.cod_plato });
    res.status(200).json({
      status: menu ? "Se elimino el plato con exito" : "No existe el plato",
      data: menu,
    });
  } catch (error) {
    res.status(404).json({
      status: "No se existe el plato a eliminar",
      message: error,
    });
  }
});

//Respuesta si se pone un metodo que no existe
app.use((req, res, next) => {
  res.status(404).send("No existe el metodo")
});

//puerto donde levanta el servidor
app.listen(3000);
console.log("Servidor corriendo en el puerto 3000");
