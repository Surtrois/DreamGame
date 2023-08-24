const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../config/database.config");

class Categorie extends Model { };

Categorie.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
}, {
    sequelize,
    tableName: 'categories',
    modelName: 'Categorie'
});

module.exports = Categorie;