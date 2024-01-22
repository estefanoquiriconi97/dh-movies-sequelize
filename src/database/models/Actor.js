module.exports = (sequelize, DataTypes) => {
  const Actor = sequelize.define(
    "Actors",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      first_name: DataTypes.STRING(100),
      last_name: DataTypes.STRING(100),
      rating: DataTypes.DECIMAL(3, 1),
      favorite_movie_id: DataTypes.INTEGER.UNSIGNED,
    },
    {
      tableName: "actors",
      underscored: true,
    }
  );

  Actor.associate = function (models) {
    Actor.belongsToMany(models.Movies, {
      as: "movies",
      through: "actor_movie",
      foreignKey: "actor_id",
      timestamps: false,
    });
  };

  return Actor;
};
