const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../config/database.config");

class New extends Model { };

New.init({
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
      thumbnail: {
        type: DataTypes.STRING,
        allowNull: false
      },
      content: {
        type: DataTypes.TEXT('long'),
        allowNull: false
      },
            categorieID: {
        type:DataTypes.INTEGER,
      },
}, {
    sequelize,
    tableName: 'news',
    modelName: 'New'
});

module.exports = New;