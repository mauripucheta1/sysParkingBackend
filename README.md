# Backend – Node.js + Express.js

Este repositorio contiene el backend de SysParking, desarrollado con **Node.js**, **Express.js**, **JWT** y **PostgreSQL**, siguiendo una arquitectura modular y escalable basada en routes → controllers → services → repositories.
El objetivo es ofrecer un servidor seguro, mantenible y fácil de extender.

---

## Tecnologías utilizadas

- [Node.js](https://nodejs.org/en) – Entorno de ejecución para construir aplicaciones en JavaScript del lado del servidor.
- [Express.js](https://expressjs.com/) – Framework minimalista para crear APIs rápidas y seguras.
- [Json Web Token JWT](https://www.jwt.io/) – Autenticación segura basada en tokens.
- [PostgreSQL](https://www.postgresql.org/) – Base de datos relacional robusta y eficiente.
- [Dotenv](https://www.npmjs.com/package/dotenv) – Manejo de variables de entorno.
- [pg](https://www.postgresql.org/) – Cliente oficial de PostgreSQL para Node.js.

---

## Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/sysParkingBackend.git
cd sysParkingBackend
```

### 2. Instalar dependencias

```bash
npm install
# o
pnpm install
```

### 3. Configurar variables de entorno

PORT=4000

DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=tu_password
DB_NAME=sysparking

JWT_SECRET=una_clave_segura
JWT_EXPIRES_IN=1h

### 3. Correr en modo desarrollo

```bash
npm run dev (ejecutará con Nodemon)
# o
npm start (ejecutará el servidor en modo de producción)
```

Buenas prácticas

- Arquitectura en capas limpia y escalable
- Encriptación de contraseñas con bcrypt
- Autenticación segura mediante JWT
- Validación de inputs con express-validator
- Manejo centralizado de errores
- Uso de variables de entorno con dotenv

Licencia
Este proyecto está bajo la licencia MIT.

Contacto
Desarrollado por Mauricio Pucheta.
Para consultas o colaboraciones: [mnp.softdev@gmail.com]