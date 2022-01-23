'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
      return queryInterface.bulkInsert('Votes',[
        {answer_id:1,user_id:1,vote:false,createdAt:new Date(),updatedAt:new Date()},
        {answer_id:1,user_id:3,vote:true,createdAt:new Date(),updatedAt:new Date()},
        {answer_id:1,user_id:4,vote:true,createdAt:new Date(),updatedAt:new Date()},
        {answer_id:2,user_id:1,vote:true,createdAt:new Date(),updatedAt:new Date()},
        {answer_id:2,user_id:4,vote:true,createdAt:new Date(),updatedAt:new Date()},
        {answer_id:2,user_id:2,vote:false,createdAt:new Date(),updatedAt:new Date()},
        {answer_id:2,user_id:5,vote:false,createdAt:new Date(),updatedAt:new Date()},
        {answer_id:3,user_id:9,vote:true,createdAt:new Date(),updatedAt:new Date()},
        {answer_id:3,user_id:8,vote:true,createdAt:new Date(),updatedAt:new Date()},
        {answer_id:4,user_id:7,vote:false,createdAt:new Date(),updatedAt:new Date()},
        {answer_id:6,user_id:5,vote:true,createdAt:new Date(),updatedAt:new Date()},
        {answer_id:6,user_id:6,vote:true,createdAt:new Date(),updatedAt:new Date()},
        {answer_id:6,user_id:7,vote:true,createdAt:new Date(),updatedAt:new Date()},
        {answer_id:6,user_id:8,vote:true,createdAt:new Date(),updatedAt:new Date()},
        {answer_id:6,user_id:9,vote:true,createdAt:new Date(),updatedAt:new Date()},
        {answer_id:6,user_id:1,vote:true,createdAt:new Date(),updatedAt:new Date()},
        {answer_id:6,user_id:3,vote:false,createdAt:new Date(),updatedAt:new Date()},
        {answer_id:Math.floor(Math.random() * 32 + 1), user_id:Math.floor(Math.random() * 69 + 1),vote:true,createdAt:new Date(),updatedAt:new Date()},
        {answer_id:Math.floor(Math.random() * 32 + 1), user_id:Math.floor(Math.random() * 69 + 1),vote:true,createdAt:new Date(),updatedAt:new Date()},
        {answer_id:Math.floor(Math.random() * 32 + 1), user_id:Math.floor(Math.random() * 69 + 1),vote:true,createdAt:new Date(),updatedAt:new Date()},
        {answer_id:Math.floor(Math.random() * 32 + 1), user_id:Math.floor(Math.random() * 69 + 1),vote:true,createdAt:new Date(),updatedAt:new Date()},
        {answer_id:Math.floor(Math.random() * 32 + 1), user_id:Math.floor(Math.random() * 69 + 1),vote:true,createdAt:new Date(),updatedAt:new Date()},
        {answer_id:Math.floor(Math.random() * 32 + 1), user_id:Math.floor(Math.random() * 69 + 1),vote:true,createdAt:new Date(),updatedAt:new Date()},
        {answer_id:Math.floor(Math.random() * 32 + 1), user_id:Math.floor(Math.random() * 69 + 1),vote:true,createdAt:new Date(),updatedAt:new Date()},
        {answer_id:Math.floor(Math.random() * 32 + 1), user_id:Math.floor(Math.random() * 69 + 1),vote:true,createdAt:new Date(),updatedAt:new Date()},
        {answer_id:Math.floor(Math.random() * 32 + 1), user_id:Math.floor(Math.random() * 69 + 1),vote:true,createdAt:new Date(),updatedAt:new Date()},
        {answer_id:Math.floor(Math.random() * 32 + 1), user_id:Math.floor(Math.random() * 69 + 1),vote:true,createdAt:new Date(),updatedAt:new Date()},
        {answer_id:Math.floor(Math.random() * 32 + 1), user_id:Math.floor(Math.random() * 69 + 1),vote:true,createdAt:new Date(),updatedAt:new Date()},
        {answer_id:Math.floor(Math.random() * 32 + 1), user_id:Math.floor(Math.random() * 69 + 1),vote:true,createdAt:new Date(),updatedAt:new Date()},
        {answer_id:Math.floor(Math.random() * 32 + 1), user_id:Math.floor(Math.random() * 69 + 1),vote:true,createdAt:new Date(),updatedAt:new Date()},
        {answer_id:Math.floor(Math.random() * 32 + 1), user_id:Math.floor(Math.random() * 69 + 1),vote:true,createdAt:new Date(),updatedAt:new Date()},
        {answer_id:Math.floor(Math.random() * 32 + 1), user_id:Math.floor(Math.random() * 69 + 1),vote:true,createdAt:new Date(),updatedAt:new Date()},
        {answer_id:Math.floor(Math.random() * 32 + 1), user_id:Math.floor(Math.random() * 69 + 1),vote:true,createdAt:new Date(),updatedAt:new Date()},
        {answer_id:Math.floor(Math.random() * 32 + 1), user_id:Math.floor(Math.random() * 69 + 1),vote:true,createdAt:new Date(),updatedAt:new Date()},
        {answer_id:Math.floor(Math.random() * 32 + 1), user_id:Math.floor(Math.random() * 69 + 1),vote:true,createdAt:new Date(),updatedAt:new Date()},
        {answer_id:Math.floor(Math.random() * 32 + 1), user_id:Math.floor(Math.random() * 69 + 1),vote:true,createdAt:new Date(),updatedAt:new Date()},
        {answer_id:Math.floor(Math.random() * 32 + 1), user_id:Math.floor(Math.random() * 69 + 1),vote:true,createdAt:new Date(),updatedAt:new Date()},
        {answer_id:Math.floor(Math.random() * 32 + 1), user_id:Math.floor(Math.random() * 69 + 1),vote:true,createdAt:new Date(),updatedAt:new Date()},
        {answer_id:Math.floor(Math.random() * 32 + 1), user_id:Math.floor(Math.random() * 69 + 1),vote:true,createdAt:new Date(),updatedAt:new Date()},
        {answer_id:Math.floor(Math.random() * 32 + 1), user_id:Math.floor(Math.random() * 69 + 1),vote:true,createdAt:new Date(),updatedAt:new Date()},
        {answer_id:Math.floor(Math.random() * 32 + 1), user_id:Math.floor(Math.random() * 69 + 1),vote:true,createdAt:new Date(),updatedAt:new Date()},
        {answer_id:Math.floor(Math.random() * 32 + 1), user_id:Math.floor(Math.random() * 69 + 1),vote:true,createdAt:new Date(),updatedAt:new Date()},
        {answer_id:Math.floor(Math.random() * 32 + 1), user_id:Math.floor(Math.random() * 69 + 1),vote:true,createdAt:new Date(),updatedAt:new Date()},
        {answer_id:Math.floor(Math.random() * 32 + 1), user_id:Math.floor(Math.random() * 69 + 1),vote:true,createdAt:new Date(),updatedAt:new Date()},
        {answer_id:Math.floor(Math.random() * 32 + 1), user_id:Math.floor(Math.random() * 69 + 1),vote:true,createdAt:new Date(),updatedAt:new Date()},
        {answer_id:Math.floor(Math.random() * 32 + 1), user_id:Math.floor(Math.random() * 69 + 1),vote:true,createdAt:new Date(),updatedAt:new Date()},
        {answer_id:Math.floor(Math.random() * 32 + 1), user_id:Math.floor(Math.random() * 69 + 1),vote:true,createdAt:new Date(),updatedAt:new Date()},
        {answer_id:Math.floor(Math.random() * 32 + 1), user_id:Math.floor(Math.random() * 69 + 1),vote:true,createdAt:new Date(),updatedAt:new Date()},
        {answer_id:Math.floor(Math.random() * 32 + 1), user_id:Math.floor(Math.random() * 69 + 1),vote:true,createdAt:new Date(),updatedAt:new Date()},
        {answer_id:Math.floor(Math.random() * 32 + 1), user_id:Math.floor(Math.random() * 69 + 1),vote:true,createdAt:new Date(),updatedAt:new Date()},
        {answer_id:Math.floor(Math.random() * 32 + 1), user_id:Math.floor(Math.random() * 69 + 1),vote:true,createdAt:new Date(),updatedAt:new Date()},
        {answer_id:Math.floor(Math.random() * 32 + 1), user_id:Math.floor(Math.random() * 69 + 1),vote:true,createdAt:new Date(),updatedAt:new Date()},
        {answer_id:Math.floor(Math.random() * 32 + 1), user_id:Math.floor(Math.random() * 69 + 1),vote:true,createdAt:new Date(),updatedAt:new Date()},
        {answer_id:Math.floor(Math.random() * 32 + 1), user_id:Math.floor(Math.random() * 69 + 1),vote:true,createdAt:new Date(),updatedAt:new Date()},
        {answer_id:Math.floor(Math.random() * 32 + 1), user_id:Math.floor(Math.random() * 69 + 1),vote:true,createdAt:new Date(),updatedAt:new Date()},
        {answer_id:Math.floor(Math.random() * 32 + 1), user_id:Math.floor(Math.random() * 69 + 1),vote:true,createdAt:new Date(),updatedAt:new Date()},
        {answer_id:Math.floor(Math.random() * 32 + 1), user_id:Math.floor(Math.random() * 69 + 1),vote:true,createdAt:new Date(),updatedAt:new Date()},
        {answer_id:Math.floor(Math.random() * 32 + 1), user_id:Math.floor(Math.random() * 69 + 1),vote:true,createdAt:new Date(),updatedAt:new Date()},
        {answer_id:Math.floor(Math.random() * 32 + 1), user_id:Math.floor(Math.random() * 69 + 1),vote:true,createdAt:new Date(),updatedAt:new Date()},
        {answer_id:Math.floor(Math.random() * 32 + 1), user_id:Math.floor(Math.random() * 69 + 1),vote:true,createdAt:new Date(),updatedAt:new Date()},
        {answer_id:Math.floor(Math.random() * 32 + 1), user_id:Math.floor(Math.random() * 69 + 1),vote:true,createdAt:new Date(),updatedAt:new Date()},
        {answer_id:Math.floor(Math.random() * 32 + 1), user_id:Math.floor(Math.random() * 69 + 1),vote:true,createdAt:new Date(),updatedAt:new Date()},
        {answer_id:Math.floor(Math.random() * 32 + 1), user_id:Math.floor(Math.random() * 69 + 1),vote:true,createdAt:new Date(),updatedAt:new Date()},
        {answer_id:Math.floor(Math.random() * 32 + 1), user_id:Math.floor(Math.random() * 69 + 1),vote:true,createdAt:new Date(),updatedAt:new Date()},
        {answer_id:Math.floor(Math.random() * 32 + 1), user_id:Math.floor(Math.random() * 69 + 1),vote:true,createdAt:new Date(),updatedAt:new Date()},
        {answer_id:Math.floor(Math.random() * 32 + 1), user_id:Math.floor(Math.random() * 69 + 1),vote:true,createdAt:new Date(),updatedAt:new Date()},

      ],{})

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('Votes',null,{})
  }
};
