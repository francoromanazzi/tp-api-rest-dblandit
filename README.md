# tp-api-rest-dblandit

> Backend API REST para aplicación de cursos y alumnos. Capacitación DBlandIT Big Data 2020

## Documentación
[En SwaggerHub](https://app.swaggerhub.com/apis-docs/francoromanazzi/tp-api-rest-dblandit/1.0.0), o bien importando el archivo [docs/api.yaml](https://github.com/francoromanazzi/tp-api-rest-dblandit/blob/master/docs/api.yaml)

## Tecnologías utilizadas

* Node.js, Express, Mongoose, MongoDB
* JWT (autenticación)
* Swagger (docs)
* Postman (testing)
* Heroku & MongoDB Atlas (deploy)

## Uso
##### Crear archivo .env
```
PORT=8080
MONGO_URI="mongodb://localhost:27017/cursos"
JWT_SECRET="clavesecreta"
```
##### Instalar dependencias
```
npm install
```
##### Cargar datos de prueba (opcional)
```
npm run populate
```
##### Levantar server
```
# Modo desarrollo
npm run nodemon

# Producción
npm start
```
## Requerimientos
La empresa DBlandIT nos pide que desarrollemos una API REST que permita administrar sus clientes y los cursos que dicta. Lo que nos dijeron fue lo siguiente: 
Los clientes tienen los siguientes datos:
* nombre
* apellido
* DNI
* dirección

Los cursos tienen los siguientes datos:
* Año de dictado
* Duración
* Tema
* Alumnos (colección de clientes)

Nos dijeron además que para almacenar los datos quieren que usemos MongoDB y NodeJS como backend, y que van a acceder más que nada a los cursos que dictan por lo que es importante recuperarlos rápidamente (esto incluye los alumnos de cada curso). Ah, también nos dijeron que de los alumnos quieren guardar la nota que tuvieron en el curso (es numérica y es una sola). 
El modelado de datos queda a nuestra disposición.

Puntualmente nos pidieron que la API permita:
* Crear y eliminar cursos.
* Listar los cursos (permitiendo filtrar por su duración y año de dictado) en formato JSON
* Obtener los alumnos de un curso en formato JSON.
* Saber cuál fue el alumno que se destacó en un curso (el que tenga mayor nota).

Nota: no se requiere implementar un mecanismo de autenticación, pero en caso que deseen hacerlo suma.
