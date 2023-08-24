const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../config/database.config");

class User extends Model { };

User.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique:true
      },
      password: {
        type: DataTypes.TEXT("long"),
        allowNull: false
      },
      accessToken: {
        type: DataTypes.TEXT("long"),
        allowNull: true
      },
}, {
    sequelize,
    tableName: 'users',
    modelName: 'User'
});

module.exports = User;