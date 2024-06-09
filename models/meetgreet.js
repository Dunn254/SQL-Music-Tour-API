'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class MeetGreet extends Model {
    static associate(models) {
      MeetGreet.belongsTo(models.Band, {
        foreignKey: 'band_id',
        as: 'band'
      });
    }
  }

  MeetGreet.init({
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
    modelName: 'MeetGreet',
    tableName: 'meet_greets',
    timestamps: false
  });

  return MeetGreet;
};
