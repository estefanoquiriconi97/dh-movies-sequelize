module.exports = (sequelize, DataTypes) => {
   const Movie = sequelize.define(
    "Movies",
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      title: DataTypes.STRING(500),
      rating : DataTypes.DECIMAL(3,1),
      awards : DataTypes.INTEGER,
      release_date : DataTypes.DATE,
      length : DataTypes.INTEGER,
      genre_id : DataTypes.INTEGER
    },
    {
      tableName: "movies",
      timestamps: false
    }
  );
  
  Movie.associate = function(models) {  
    Movie.belongsTo(models.Genres, {
      as : "genres",
      foreignKey: "genre_id",
    });
  }

  return Movie;
};
