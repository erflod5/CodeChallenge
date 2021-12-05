# Code Challenge

## About

Fullstack code challenge

## Demo

La aplicación se encuentra corriendo en una máquina virtual en la nube, con el servicio EC2 de AWS, utilizando Docker y Docker Compose.

- [WebApp](http://3.21.103.71)
- [API](http://3.21.103.71:3000)

## Entorno de Desarrollo

### Backend

Para correr el proyecto en un entorno de desarrollo por primera vez se deben seguir los siguientes pasos.

- Ir a la carpeta `backend`
- Installar los paquetes con el comando `npm install`
- Correr la aplicación con el comando `npm run dev`
- Si se desea correr las pruebas unitarias, se corren con el comando `npm run test` (Opcional)

### Frontend

Para correr el proyecto en un entorno de desarrollo por primera vez se deben seguir los siguientes pasos.

- Ir a la carpeta `frontend`
- Installar los paquetes con el comando `npm install`
- Correr la aplicación con el comando `npm start`

## Entorno de Producción

Para correr el proyecto para el entorno de producción o mediante Docker y Docker-Compose se deben seguir los siguientes pasos.

- Ir a la carpeta `frontend`
- Generar el build de la aplicación con el comando `npm run build`
- Ir a la raíz del repositorio
- Correr el comando `docker-compose up --build -d`

## Consideraciones

- El puerto utilizado para la API es el 3000.
- El puerto utilizado para el entorno de desarrollo de React puede ser cualquiera a excepción del 3000.
- El puerto de exposición de la página web en el entorno de producción es el 80.

## Herramientas y software

| Nombre         | Version  |
| -------------- | -------- |
| Chai           | 4.3.4    |
| Cors           | 2.8.5    |
| Express        | 4.17.1   |
| Mocha          | 9.1.3    |
| NodeJs         | 12       |
| React          | 17.0.2   |
| React-Boostrap | 2.0.3    |
| Redux          | 4.1.2    |
| React-Redux    | 7.2.6    |
| Supertest      | 6.1.6    |
| Docker         | 20.10.11 |
| Docker-Compose | 2.2.1    |

## Recursos

- [Docker](https://www.docker.com/)
- [NodeJs](https://nodejs.org/es/)
- [ReactJs](https://es.reactjs.org/)

## Contribuidores

 <table>
  <tr>
    <td align="center"><a href="https://github.com/erflod5"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/41808911?v=4" width="100px;" alt=""/><br /><sub><b>Erik Flores - 201701066</b></sub></a></td>
</table>
