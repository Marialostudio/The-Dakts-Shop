# The-Dakts-Shop
  _Welcome to DAKTS - Indulge in Nature's Nourishment!_ 
  Hey there, seekers of self-care and guardians of holistic well-being! Get ready to elevate your snacking experience with DAKTS – where every bite is a celebration of mindful pleasure and reverence for Mother Nature.
***
 ## Table of Contents
1. [General Information](#general-info)
2. [Technologies](#technologies)
3. [Process](#process)
4. [Instructions](#instructions)
***
<a name="general-info"></a>
### General Information
This is a Fullstack MEAN Stack project created within the framework of the Fullstack Web Development Bootcamp at BIT Institute. 
![BIT Institute](https://bit.institute/images/Curso-Desarrollo-Full-Stack-864wX360h-v3.webpg)
***
<a name="technologies"></a>
### Technologies
Technologies used in the development of this project:
* [Angular](https://angular.io/)
* [Node.js](https://nodejs.org/): Versión 12.3 
* [Express](https://www.npmjs.com/package/express): Version 4.19.2
* [Nodemon](https://www.npmjs.com/package/nodemon): Version 3.1.3
* [Morgan](https://www.npmjs.com/package/morgan): Version 1.10.0
* [Dotenv](https://www.npmjs.com/package/dotenv): Version 16.4.5
* [Mongoose](https://www.npmjs.com/package/mongoose): Version 8.4.1
***
<a name="process"></a>
### Process
This was the process involved in creating this project: 

#### At the Frontend
```
1. Se creó un repositorio GitHub y se sincronizó con el local. 
2. Se gestionaron las credenciales de acceso a la Base de Datos con Mongo Atlas.
3. Se creó un nuevo proyecto de tipo Node.
4. Se creó el archivo .gitignore con el fin de mantener archivos ocultos o sin seguimiento.
5. Se instalaron las dependencias y las dependencias de desarrollo.
6. Se creó el archivo de punto de entrada de la aplicación.
7. Se creó el archivo de variables de entorno.
8. Se gestionó la configuración del servidor.
9. Se realizaron pruebas de conexión con la Base de Datos.
10. Se realizaron las configuraciones del enrutamiento.
11. Se realizaron las configuraciones de los controladores.
12. Se preparó el modelo para probar con el front de Postman.
13. Se probaron todos los endpoint con Postman.
14. Se comprobó la persistencia de los datos en Mongo Atlas.
```
#### At the Backend
```
1. A GitHub repository was created and synced with the local one. 
2. Database access credentials were managed with Mongo Atlas.
3. A new project of type Node was created.
4. Created .gitignore file in order to keep hidden or untracked files.
5. Se instalaron las dependencias y las dependencias de desarrollo.
6. Dependencies and development dependencies installed.
7. Environment variables file created.
8. Managed server configuration.
9. Connection tests were carried out with the Database.
10. Routing configurations have been made.
11. Driver configurations done.
12. The models were prepared to test with the Postman front.
13. All endpoints were tested with Postman.
14. Checked data persistence in Mongo Atlas.
```
***
<a name="instructions"></a>
### Instrucciones
Para realizar pruebas con este proyecto, debe tener en cuenta lo siguiente:
* Clonar el proyecto con ```$git clone https://github.com/Marialostudio/proyecto-REST-API-zodiacsigns.git```
* Ubicarse en la carpeta raíz del repositorio ```$ cd ../su-carpeta```
* Ejecutar la instalación con el comando ```npm install```
* Correr el proyecto con el comando ```npm run dev```
* Abrir postman: crear una colección que incluya la solicitud de tipo ```POST``` con el link _http://localhost:3000/zodiacsigns_ e incluya en el body (raw y JSON) el objeto:
```
{
        "signo": "Libra",
        "desde": "2024-09-23",
        "hasta": "2024-10-22",
        "simbolo": "La Balanza",
        "orden": "7",
        "planeta": "venus",
        "fuego": false,
        "agua": true,
        "aire": false,
        "tierra" : false
    }
```
* Incluya en la colección la solicitud de tipo ```GET``` con el link _http://localhost:3000/zodiacsigns/incluya-el-id_ para poder leer un signo.
* Incluya en la colección la solicitud de tipo ```GET``` con el link _http://localhost:3000/zodiacsigns/_ para poder leer todos los signos.
* Incluya en la colección la solicitud de tipo ```PUT``` con el link _http://localhost:3000/zodiacsigns/incluya-el-id_ para poder modificar y actualizar un signo.
* Incluya en la colección la solicitud de tipo ```DELETE``` con el link _http://localhost:3000/zodiacsigns/incluya-el-id_ para poder eliminar un signo.
