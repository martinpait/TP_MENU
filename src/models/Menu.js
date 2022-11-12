const { Schema, model } = require("mongoose");

const MenuSchema = new Schema(
  {
    cod_plato: {
      type: String,
      required: true,
      unique: true,
    },
    nombre: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    descripcion: {
      type: String,
      trim: true,
    },
    precio: {
      type: Number,
      required: true,
      trim: true,
    },
    categoria: {
      type: String,
      required: true,
      trim: true,
    },
    activo: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports =  model("Menu", MenuSchema);
