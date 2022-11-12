## **Nombre del grupo** 
**Martin Pait**
## **Integrantes** 
**Martin Pait**
## **Descripción del negocio** 
**Bar donde por medio del escaneo de un QR en las mesas se trae la carta (menu). Para lograr eso se crar un conjunto de apis para la gestion de la carta**


## **Apis desarrolladas**
#### **Acción                    |     HTTP method     |     URI relativo**
1. Obtener una lista de todos los platos     |   GET     |   /v1/menu
    Se lista todos los registros de la base
    Ejemplo de request y response
        request
        curl --location --request GET 'localhost:3000/menu'

      response:
      Status: 200 OK
  {
    "data": [
        {
            "_id": "636fb826b0f433c1db3dff6e",
            "activo": false,
            "categoria": "Entrada",
            "cod_plato": "EMPOSO",
            "createdAt": "2022-11-12T15:13:42.175Z",
            "descripcion": "Empanada de Osobuco Frita",
            "nombre": "Empanada de Osobuco",
            "precio": 200,
            "updatedAt": "2022-11-12T16:14:47.800Z"
        },
        {
            "_id": "636fb8a2b0f433c1db3dff70",
            "activo": true,
            "categoria": "Entrada",
            "cod_plato": "EMPCAR",
            "createdAt": "2022-11-12T15:15:46.321Z",
            "descripcion": "Empanada de carne Frita",
            "nombre": "Empanada de carne",
            "precio": 200,
            "updatedAt": "2022-11-12T15:15:46.321Z"
        }
    ],
    "status": "Listado de platos"
  }

2. Obtener un plato según el codigo      |     GET     |     /v1/menu/:cod_plato
    Se lista el plato de la base segun el codigo del mismo
    Ejemplo de request y response
    Ejemplo de request y response
        request
        curl --location --request GET 'localhost:3000/menu/TORCOM'

      response:
      Status: 200 OK
{
    "data": {
        "_id": "636fceca957df765846a33f5",
        "activo": true,
        "categoria": "Entrada",
        "cod_plato": "TORCOM",
        "createdAt": "2022-11-12T16:50:18.964Z",
        "descripcion": "Tortilla de papa y cebolla",
        "nombre": "Tortilla",
        "precio": 500,
        "updatedAt": "2022-11-12T16:50:18.964Z"
    },
    "status": "Plato encontrado con exito"
}

  Mensaje de error
    

3. Obtener una lista de platos por categoría     |     GET     |     /v1/menu/category/:categoria

  Ejemplo de request y response
  Ejemplo de request y response
        request
        curl --location --request GET 'localhost:3000/menu/categoria:Entrada'

      response:
      Status: 200 OK
  {
    "data": [
        {
            "_id": "636fb826b0f433c1db3dff6e",
            "activo": false,
            "categoria": "Entrada",
            "cod_plato": "EMPOSO",
            "createdAt": "2022-11-12T15:13:42.175Z",
            "descripcion": "Empanada de Osobuco Frita",
            "nombre": "Empanada de Osobuco",
            "precio": 200,
            "updatedAt": "2022-11-12T16:14:47.800Z"
        },
        {
            "_id": "636fb8a2b0f433c1db3dff70",
            "activo": true,
            "categoria": "Entrada",
            "cod_plato": "EMPCAR",
            "createdAt": "2022-11-12T15:15:46.321Z",
            "descripcion": "Empanada de carne Frita",
            "nombre": "Empanada de carne",
            "precio": 200,
            "updatedAt": "2022-11-12T15:15:46.321Z"
        }
    "status": "Categoria encontrada con exito"
}
4. Crear un nuevo plato      |     POST      |/      v1/menu

      response:
      Status: 201 Created

{
    "data": {
        "_id": "636fceca957df765846a33f5",
        "activo": true,
        "categoria": "Entrada",
        "cod_plato": "TORCOM",
        "createdAt": "2022-11-12T16:50:18.964Z",
        "descripcion": "Tortilla de papa y cebolla",
        "nombre": "Tortilla",
        "precio": 500,
        "updatedAt": "2022-11-12T16:50:18.964Z"
    },
    "status": "Se guardo el plato con exito"
}


5. Actualizar un plato     |     PATCH     |     /v1/menu/:cod_plato
6. Eliminar un plato     |     DELETE      |     /v1/menu/:cod_plato


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