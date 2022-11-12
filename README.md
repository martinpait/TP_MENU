Nombre del grupo: Martin Pait
Integrantes: Martin Pait
Descripción del negocio: Contar con apis para la gestion del la carta (menu) en un restaurante.


Apis desarrolladas:
Acción										                HTTP method		URI relativo
Obtener una lista de todos los platos		      GET		    /v1/menu
Obtener un plato según el id	                GET		    /v1/menu/:cod_plato
Obtener una lista de platos por categoría	    GET		    /v1/menu/category/:categoria
Crear un nuevo plato						              POST		  /v1/menu
Actualizar un plato							              PATCH		  /v1/menu/:cod_plato
Eliminar un plato	                            DELETE    /v1/menu/:cod_plato


Modelo de la BD
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