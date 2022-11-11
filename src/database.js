// conexion a la base de datos
const { connect } = require("mongoose");

(async () => {
  try {
    const db = await connect(
      "mongodb://localhost:27017/menu-bar"
    );
    console.log("Conectado a la DB", db.connection.name);
  } catch (e) {
    console.log(e);
  }
})();