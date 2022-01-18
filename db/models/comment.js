'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    answer_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    content: DataTypes.TEXT
  }, {});
  Comment.associate = function (models) {
    // associations can be defined here
    Comment.belongsTo(models.Answer, { foreignKey: 'answer_id' })
    Comment.belongsTo(models.User, { foreignKey: 'user_id' })
  };
  return Comment;
};