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
app.get("/v1/menu", async (req, res) => {
  try {
    const menuList = await Menu.find();
    res.status(200).json({
      status: "Listado de platos",
      data: menuList,
    });
  } catch (error) {
    res.status(500).json({
      status: "Error",
      message: error.message,
    });
  }
});

//Traer un plato por codigo
app.get("/v1/menu/:cod_plato", async (req, res) => {
  try {
    const menu = await Menu.findOne({
      cod_plato: req.params.cod_plato,
    });
    menu
      ? ((statusCode = 200), (statusMesssage = "Plato encontrado con exito"))
      : ((statusCode = 404), (statusMesssage = "Plato no encontrado"));
    
    res.status(statusCode).json({
      status: statusMesssage,
      data: menu,
    });
  } catch (error) {
    res.status(500).json({
      status: "Error",
      message: error.message,
    });
  }
});

//Listar platos por categoria
app.get("/v1/menu/category/:categoria", async (req, res) => {
  try {
    const menu = await Menu.find({
      categoria: req.params.categoria,
    });
    menu
      ? ((statusCode = 200), (statusMesssage = "Categoria encontrada con exito"))
      : ((statusCode = 404), (statusMesssage = "Categoria no encontrada"));
    
    res.status(statusCode).json({
      status: statusMesssage,
      data: menu,
    });
  } catch (error) {
    res.status(500).json({
      status: "Error",
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
      status: "Se creo el plato con exito",
      data: menuSave,
    });
  } catch (error) {
    res.status(500).json({
      status: "Error",
      message: error.message,
    });
  }
});

//Modificar un plato del menu
app.patch("/v1/menu/:cod_plato", async (req, res) => {
  try {
    const menu = await Menu.findOneAndUpdate(
      { cod_plato: req.params.cod_plato },
      {
        $set: req.body,
      },
      { new: true }
    );
    menu
    ? ((statusCode = 200), (statusMesssage = "Plato actualizado con exito"))
    : ((statusCode = 404), (statusMesssage = "Plato no encontrado"));
  
  res.status(statusCode).json({
    status: statusMesssage,
    data: menu,
  });
  } catch (error) {
    res.status(500).json({
      status: "Error ",
      message: error.message,
    });
  }
});

//Eliminar un Plato del menu
app.delete("/v1/menu/:cod_plato", async (req, res) => {
  try {
    const menu = await Menu.findOneAndDelete({
      cod_plato: req.params.cod_plato,
    });
    menu
    ? ((statusCode = 200), (statusMesssage = "Plato eliminado con exito"))
    : ((statusCode = 404), (statusMesssage = "Plato no encontrado"));
  
  res.status(statusCode).json({
    status: statusMesssage,
    data: menu,
  });
  } catch (error) {
    res.status(500).json({
      status: "Error",
      message: error.message,
    });
  }
});

//Respuesta si se pone un metodo que no existe
app.use((req, res, next) => {
  res.status(400).send("No existe el metodo");
});

//puerto donde levanta el servidor
app.listen(3000);
console.log("Servidor corriendo en el puerto 3000");
