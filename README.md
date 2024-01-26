# Digital House

## Databases

### Sequelize - MySQL

1. **Installation**
   - _npm i -g sequelize sequelize-cli_
   - _npm i mysql2_

2. Create a file called **.sequelizerc** at the root of the project, and inside this file, write the following:

```javascript
const path = require('path')

module.exports = {
  config: path.resolve('./database/config', 'config.js'),
  'models-path': path.resolve('./database/models'),
  'seeders-path': path.resolve('./database/seeders'),
  'migrations-path': path.resolve('./database/migrations'),
}
```

3. Initialize **Sequelize** in the project
   - _Sequelize init_

4. Database Connection
   - **database/config/config.js**

```javascript
module.exports = {
  "development": {
    "username": "root",
    "password": "Your password",
    "database": "Database name",
    "host": "127.0.0.1", //localhost
    "dialect": "mysql"
  }
}
```
