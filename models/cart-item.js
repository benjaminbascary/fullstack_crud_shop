const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../utils/mysql');

const CartItem = sequelize.define('cartItem', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  quantity: Sequelize.INTEGER
});

module.exports = CartItem;