'use strict';

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('pet', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    animalType: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    breed: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  });
};