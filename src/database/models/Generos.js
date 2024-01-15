module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
     "Generos",
     {
       id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true,
       },
       name: DataTypes.STRING(100),
       ranking : DataTypes.INTEGER,
       active : DataTypes.BOOLEAN,
     },
     {
       tableName: "genres",
       timestamps : false
     }
   );
 };
 