'use strict';
module.exports = (sequelize, DataTypes) => {
  const Answer = sequelize.define('Answer', {
    content: DataTypes.TEXT,
    question_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {});
  Answer.associate = function (models) {
    // associations can be defined here
    Answer.hasMany(models.Comment, { foreignKey: 'answer_id' })
    Answer.belongsTo(models.User, { foreignKey: 'user_id' })
    Answer.hasMany(models.Vote, { foreignKey: 'answer_id' })
  };
  return Answer;
};