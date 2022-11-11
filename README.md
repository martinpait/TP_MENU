Nombre del grupo: Martin Pait
Integrantes: Martin Pait
Descripción del negocio elegido. 
Contar con apis para la gestion del la carta (menu) en un restaurante.

Que el backend exponga un CRUD de API rest para manejar dichas entidades.
Que las entidades se puedan almacenar un repositorio (MongoDB por ejemplo).

Restful API

Se deberá documentar en el README la api REST que expondrá el servidor web. Se utilizará la arquitectura REST. Deberá incluir:

Endpoint
Verbo HTTP
Codigo de Error
Descripción de lo qie realiza

Acción										HTTP method		URI relativo
Obtener una lista de todos los platos		    GET		    /v1/menu
Obtener un plato según el id	                GET		    /v1/menu/:id
Obtener una lista de platos por categoría	    GET		    /v1/menu/:category
Crear un nuevo plato						    POST		/v1/menu
Actualizar un plato							    PATCH		/v1/menu/:id
Eliminar un plato	                            DELETE      /v1/menu/:id

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