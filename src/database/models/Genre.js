module.exports = (sequelize, DataTypes) => {
  const Genre = sequelize.define(
    "Genres",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: DataTypes.STRING(100),
      ranking: DataTypes.INTEGER,
      active: DataTypes.BOOLEAN,
    },
    {
      tableName: "genres",
      timestamps: false,
    }
  );

  Genre.associate = function (models) {
    Genre.hasMany(models.Movies, {
      as: "movies",
      foreignKey: "genre_id",
    });
    
    Genre.hasMany(models.Series, {
      as: "series",
      foreignKey: "genre_id",
    });
  };
  return Genre;
};
