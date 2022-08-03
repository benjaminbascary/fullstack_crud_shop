const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../utils/mysql');

const Order = sequelize.define('order', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  quantity: Sequelize.INTEGER
});

module.exports = Order;