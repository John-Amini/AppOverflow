'use strict';
const faker = require("faker")
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
    {title:"Please help 1",content:"this is the content for 1",user_id:1,createdAt:new Date(),updatedAt: new Date()},
    {title:"Please help 2",content:"this is the content for 2",user_id:2,createdAt:new Date(),updatedAt: new Date()},
    {title:"Please help 3",content:"this is the content for 3",user_id:3,createdAt:new Date(),updatedAt: new Date()},
    {title:"How do you use faker? 4",content:"I can't find any documentation for faker and I need to figure out how to create a username",user_id:4,createdAt:new Date(),updatedAt: new Date()},
    {title:"Creating forms in pug 5",content:"Whats the best practice for creating pug forms in a project?",user_id:5,createdAt:new Date(),updatedAt: new Date()},
    {title:"Fresh install of faker not working 6",content:"When I install faker and try using its giving me a not compatible error",user_id:6,createdAt:new Date(),updatedAt: new Date()},
    {title:"Hey can anyone see whats wrong with my code here? 7",content:"{INSERT CODE BLOCK HERE}",user_id:7,createdAt:new Date(),updatedAt: new Date()},
    {title:"October 2021 Cohort html practice help 8",content:"So I was trying to learn html before the cohort started. Does anyone have any good resources?",user_id:7,createdAt:new Date(),updatedAt: new Date()},
    {title:"Sequelize isnt giving me a proper error code 9",content:"Sequelize keeps telling me it did the migration but for some reason it doesnt actually show up",user_id:1,createdAt:new Date(),updatedAt: new Date()},
    //{title:"",content:"",user_id:1,createdAt:new Date(),updatedAt: new Date()},
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
