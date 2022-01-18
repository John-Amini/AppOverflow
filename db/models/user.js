'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    hashed_password: {
      type: DataTypes.STRING
    }
  }, {});
  User.associate = function (models) {
    // associations can be defined here
    User.hasMany(models.Answer, { foreignKey: 'user_id' })
    User.hasMany(models.Question, { foreignKey: 'user_id' })
    User.hasMany(models.Vote, { foreignKey: 'user_id' })
    User.hasMany(models.Comment, { foreignKey: 'user_id' })
  };
  return User;
};