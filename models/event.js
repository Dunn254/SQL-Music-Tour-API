'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    static associate(models) {
      // Many-to-Many association with Stage
      Event.belongsToMany(models.Stage, {
        through: 'EventStage',
        foreignKey: 'event_id',
        otherKey: 'stage_id',
        as: 'stages'
      });
    }
  }

  Event.init({
    // Define your Event attributes here
  }, {
    sequelize,
    modelName: 'Event',
    tableName: 'events',
    timestamps: false
  });

  return Event;
};
