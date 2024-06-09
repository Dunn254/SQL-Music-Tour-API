'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class SetTime extends Model {
    static associate(models) {
      SetTime.belongsTo(models.Band, {
        foreignKey: 'band_id',
        as: 'band'
      });
    }
  }

  SetTime.init({
    // Your attributes here
    band_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'bands',
        key: 'band_id'
      }
    }
  }, {
    sequelize,
    modelName: 'SetTime',
    tableName: 'set_times',
    timestamps: false
  });

  return SetTime;
};
