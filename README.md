# Digital House

## Bases de datos 

### Sequelize - MySQL

1. Instación
   - _npm i -g sequelize sequelize-cli_
   - _npm i mysql2_

2. Crear un archivo llamada **.sequelizerc** en la raiz del proyecto y dentro de este archivo escribir lo siguiente:

```javascript
const path = require('path')

module.exports = {
config : path.resolve('./database/config', 'config.js'),
'models-path' : path.resolve('./database/models'),
'seeders-path' : path.resolve('./database/seeders'),
'migrations-path' : path.resolve('./database/migrations'),
}
```
3. Iniciar **Sequelize** en el proyecto
   - _Sequelize init_


4. Conexión con la base de datos
   - **database/config/config.js**

````javascript
module.exports = {
  "development": {
    "username": "root",
    "password": "Your password",
    "database": "Database name",
    "host": "127.0.0.1", //localhost
    "dialect": "mysql"
  }
}
``````
