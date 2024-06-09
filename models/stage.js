'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Stage extends Model {
    static associate(models) {
      // Many-to-Many association with Event
      Stage.belongsToMany(models.Event, {
        through: 'EventStage',
        foreignKey: 'stage_id',
        otherKey: 'event_id',
        as: 'events'
      });
    }
  }

  Stage.init({
    // Define your Stage attributes here
  }, {
    sequelize,
    modelName: 'Stage',
    tableName: 'stages',
    timestamps: false
  });

  return Stage;
};
