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

