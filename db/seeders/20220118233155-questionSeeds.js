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
    {title:"Please help 1",content:"this is the content for 1",user_id:1,createdAt:new Date(),updatedAt: new Date()},//1
    {title:"Please help 2",content:"this is the content for 2",user_id:2,createdAt:new Date(),updatedAt: new Date()},//2
    {title:"Please help 3",content:"this is the content for 3",user_id:3,createdAt:new Date(),updatedAt: new Date()},//3
    {title:"How do you use faker? 4",content:"I can't find any documentation for faker and I need to figure out how to create a username",user_id:4,createdAt:new Date(),updatedAt: new Date()}, //4
    {title:"Creating forms in pug 5",content:"Whats the best practice for creating pug forms in a project?",user_id:5,createdAt:new Date(),updatedAt: new Date()},//5
    {title:"Fresh install of faker not working 6",content:"When I install faker and try using its giving me a not compatible error",user_id:6,createdAt:new Date(),updatedAt: new Date()},//6
    {title:"October 2021 Cohort html practice help 8",content:"So I was trying to learn html before the cohort started. Does anyone have any good resources?",user_id:7,createdAt:new Date(),updatedAt: new Date()},//7
    {title:"Sequelize isnt giving me a proper error code 9",content:"Sequelize keeps telling me it did the migration but for some reason it doesnt actually show up",user_id:1,createdAt:new Date(),updatedAt: new Date()},//8
    {title:"Selenium webdriver unable to translate french site via options",content:"I want to web scrape le monde news site (https://www.lemonde.fr) and I have read the documentation however I still cant make sense of it",user_id:15,createdAt:new Date(),updatedAt: new Date()},//9
    {title:"Postman returns an invalid hostname",content:"I have a web service running on an AWS instance. When I enter the URL into a browser, I am taken to the instance and a page is displayed. This is what I expected to happen. I have code in a c# application which creates a SOAP request and I am able to send that request in and get back a response.I now want to be able to create the SOAP request from within Postman. I believe I have everything set up, but I keep getting a invalid hostname HTTP error 400 message.",user_id:32,createdAt:new Date(),updatedAt: new Date()},//10
    {title:"How to assign values in grid display?",content:"So I was trying to make a table using grid display but the actual linking of the values isnt working.",user_id:45,createdAt:new Date(),updatedAt: new Date()},//11
    {title:"Can someone explain breadth search search?",content:"Whats is the actual use case of breadth first search and how can I recognize it?",user_id:37,createdAt:new Date(),updatedAt: new Date()},//12
    {title:"How does one determine the time complexity of something?",content:"In the case of having 2 seperate for loops in count its counted as O(n) but they're are 2 for loops.",user_id:24,createdAt:new Date(),updatedAt: new Date()},//13
    {title:"My vs code keeps displaying the could not fetch remote environment.",content:"I was working in ubuntu wsl2 and when opening vs code it just gives me message that it couldnt connect to the remote extension host error",user_id:47,createdAt:new Date(),updatedAt: new Date()},//14
    {title:"Display a text box and make it undeditable until a button is pressed",content:"I have a text box that I want to make editable after the user hits a button. Currently its a span.",user_id:15,createdAt:new Date(),updatedAt: new Date()},//15
    {title:"How to remove an eventListener?",content:"Im trying to remove an event listener but it says I need a reference to the function",user_id:22,createdAt:new Date(),updatedAt: new Date()},//16
    //{title:"",content:"",user_id:,createdAt:new Date(),updatedAt: new Date()},
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
