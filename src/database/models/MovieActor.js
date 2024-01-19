module.exports = (sequelize, DataTypes) => {
  const MovieActor = sequelize.define(
    "MovieActor",
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      actor_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        references: {
          model: "Actors",
          key: "id",
        },
      },
      moive_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        references: {
          model: "Movies",
          key: "id",
        },
      },
    },
    {
      tableName: "actor_movie",
      timestamps: false,
    }
  );

  return MovieActor;
};
