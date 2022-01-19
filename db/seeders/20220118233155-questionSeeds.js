'use strict';

const { query } = require("express");

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
   return queryInterface.bulkInsert('Questions',[
    {title:"Please help 1",content:"this is the content for 1",user_id:5,createdAt:new Date(),updatedAt: new Date()},
    {title:"Please help 2",content:"this is the content for 2",user_id:5,createdAt:new Date(),updatedAt: new Date()},
    {title:"Please help 3",content:"this is the content for 3",user_id:5,createdAt:new Date(),updatedAt: new Date()}
   ],{});

  },



  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('Questions',null,{});
  }
};
