'use strict';
module.exports = (sequelize, DataTypes) => {
  const Vote = sequelize.define('Vote', {
    answer_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    vote: DataTypes.BOOLEAN
  }, {});
  Vote.associate = function (models) {
    // associations can be defined here
    Vote.belongsTo(models.Answer, { foreignKey: 'answer_id' })
    Vote.belongsTo(models.User, { foreignKey: 'user_id' })
  };
  return Vote;
};