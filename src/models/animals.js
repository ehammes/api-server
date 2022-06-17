'use strict';

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('animals', {
    animalType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    classification: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    numberLegs: { 
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    animalId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  });
};