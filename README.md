### **Nombre del grupo** 
**_Martin Pait_**
### **Integrantes** 
**_Martin Pait_**
### **Descripción del negocio** 
**_Bar donde por medio del escaneo de un QR en las mesas se trae la carta (menu). Para lograr eso se crar un conjunto de apis para la gestion de la carta_**

---
### **Apis Dsarrolladas**
1. **Obtener una lista de todos los platos**
    #### **HTTP method**
          GET
    #### **URI relativo**
          /v1/menu
    #### **Detalle de la API**
          Se lista todos los registros de la base
    #### **Ejemplo de request y response**
          request:
            curl --location --request GET 'localhost:3000/v1/menu'

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
    #### **Mensaje de error**
          Error: 500
            Captura mensaje de error del sistema

2. **Obtener un plato según el codigo**
    #### **HTTP method**
          GET
    #### **URI relativo**
          /v1/menu/:cod_plato
    #### **Detalle de la API**
          Se lista el plato de la base segun el codigo del mismo
    #### **Ejemplo de request y response**
          request:
            curl --location --request GET 'localhost:3000/v1/menu/TORCOM'

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

    #### **Mensaje de error**
          Error: 404
            {
              "status": "Plato no encontrado",
              "data": null
            }
          
          Error: 500
            Captura mensaje de error del sistema

3. **Obtener una lista de platos por categoría**
    #### **HTTP method**
          GET
    #### **URI relativo**
          /v1/menu/category/:categoria
    #### **Detalle de la API**
          Se lista el plato de la base segun el codigo del mismo
    #### **Ejemplo de request y response**
          request:
            curl --location --request GET 'localhost:3000/v1/menu/category/Entrada'

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

    #### **Mensaje de error**
          Error: 500
          Captura mensaje de error del sistema

4. **Dar de alta un nuevo plato**
    #### **HTTP method**
          POST
    #### **URI relativo**
          /v1/menu/
    #### **Detalle de la API**
          Se agrega a la base de datos un nuevo plato
    #### **Ejemplo de request y response**
          request:
            curl --location --request POST 'localhost:3000/v1/menu' \
              --header 'Content-Type: application/json' \
              --data-raw '{
                            "cod_plato": "TORCOM",
                            "nombre": "Tortilla",
                            "descripcion": "Tortilla de papa y cebolla",
                            "precio": 500,
                            "categoria": "Entrada",
                            "activo": true
                          }'

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
              "status": "Se creo el plato con exito"
          }

    #### **Mensaje de error**
          Error: 500
            Captura mensaje de error del sistema
            Ejemplo:

            {
              "status": "Error",
              "message": "E11000 duplicate key error collection: menu-bar.menus index: cod_plato_1 dup key: { cod_plato: \"EMPCAR\" }"
            }

5. **Modificar algun dato de un plato según el codigo**
    #### **HTTP method**
          PATCH
    #### **URI relativo**
          /v1/menu/:cod_plat
    #### **Detalle de la API**
          Se lista el plato de la base segun el codigo del mismo
    #### **Ejemplo de request y response**
          request:
            curl --location --request PATCH 'localhost:3000/v1/menu/TORCOM(' \
              --header 'Content-Type: application/json' \
              --data-raw '{
                            "activo": false
                          }'
          response:
            Status: 200 OK      
          {
              "data": {
                  "_id": "6370047dab4eb0b44833342d",
                  "activo": false,
                  "categoria": "Entrada",
                  "cod_plato": "TORCOM",
                  "createdAt": "2022-11-12T20:39:25.944Z",
                  "descripcion": "Tortilla de papa y cebolla",
                  "nombre": "Tortilla",
                  "precio": 500,
                  "updatedAt": "2022-11-12T20:59:28.004Z"
            },
              "status": "Se actualizo el plato con exito"
          } 

  #### **Mensaje de error**
        Error: 404
        {
          "status": "Plato o Nombre de campo no encontrado",
          "data": null
        }
        
        Error: 500
          Captura mensaje de error del sistema

6. **Eliminar un  plato por el codigo**
    #### **HTTP method**
          DELETE
    #### **URI relativo**
          /v1/menu/:cod_plat
    #### **Detalle de la API**
          Se elimina el plato de la base segun el codigo del mismo
    #### **Ejemplo de request y response**
          request:
            curl --location --request DELETE 'localhost:3000/v1/menu/TORCOM'

          response:
            Status: 200 OK
          {
              "data": {
                  "_id": "636fb826b0f433c1db3dff6e",
                  "activo": true,
                  "categoria": "Entrada",
                  "cod_plato": "EMPOSO",
                  "createdAt": "2022-11-12T15:13:42.175Z",
                  "descripcion": "Empanada de Osobuco Frita",
                  "nombre": "Empanada de Osobuco",
                  "precio": 200,
                  "updatedAt": "2022-11-12T20:05:42.250Z"
              },
              "status": "Se elimino el plato con exito"
          }

    #### **Mensaje de error**
          Error: 404
            {
              "status": "Plato no encontrado",
              "data": null
            }
          
          Error: 500
            Captura mensaje de error del sistema
 ---     
### **Modelo de la BD MONGO**
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