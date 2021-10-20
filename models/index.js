const { DataTypes } = require("sequelize");
const { connection } = require("../connection");

const Account = connection.define("Account", {
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, { 
    indexes: [{unique: true, fields: ["username"]}]
});

module.exports = {Account};