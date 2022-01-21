'use strict';
module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define('Question', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    user_id: DataTypes.INTEGER
  }, {});
  Question.associate = function (models) {
    // associations can be defined here
    Question.belongsTo(models.User, { foreignKey: 'user_id' })
    Question.hasMany(models.Answer, { foreignKey: 'question_id', onDelete: 'CASCADE' , hooks: true})
  };
  return Question;
};
