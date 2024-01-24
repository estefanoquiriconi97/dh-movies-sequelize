module.exports = (sequelize, DataTypes) => {
  const Serie = sequelize.define(
    "Series",
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncremet: true,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING(500),
        allowNull: false,
      },
      release_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      end_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      genre_id: {
        type: DataTypes.INTEGER.UNSIGNED,
      },
    },
    {
      tableName: "series",
      timestamps: false,
    }
  );

  Serie.associate = (models) => {
    Serie.belongsTo(models.Genres, {
      as: "genres",
      foreignKey: "genre_id",
    });
  };

  return Serie;
};
