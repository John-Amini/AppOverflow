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
    {title:"Jackson Deserializing working but Gson isn't?",content:"I am stuck in this issue, Jackson is able to deserialize the object correctly but Gson is printing empty objects. Has anyone faced this issue before. I am dependent on a library that uses gson and it wasn't working so I am trying to reproduce it like below. If gson needs any custom deserializer, then I may need to update the dependent library.",user_id:43,createdAt:new Date(),updatedAt: new Date()},//17
    {title:"How to use TwoFactor with Identity to only elevate user?",content:"I am using Identity and would like to use two-factor check only to elevate user to access certain portion of webpage. Namely, if an administrator logs in with password and username, he is still allowed to browse private parts of the site, but as user; he needs to enter his 2fa code to access sensitive pages.",user_id:54,createdAt:new Date(),updatedAt: new Date()},//18
    {title:"Does the event `invalid` only fire once?",content:"I tried to hook into the invalid event for numeric input (which is required), and while the invalid event fires right on loading the page (as all the cells are empty), it does not refire if one fills an input field and removes its content or inputs a letter instead of a number. But I could not find anything indicating that this would be its behaviour. But at the same time I can also not find an issue with my code. So I guess I am first asking what the desired behaviour is before I continue hunting for bugs.",user_id:63,createdAt:new Date(),updatedAt: new Date()},//19
    {title:"How to get Multiple GPUs on Google Colab?",content:"I am trying to run Python code (gpu.ipynb from TensorFlow) to execute parallel tasks on multiple GPUs. But I do not find any option under Runtime to request multiple GPUs. Is it possible to request multiple GPUs in Colab or Colab Pro or anything else?",user_id:35,createdAt:new Date(),updatedAt: new Date()},//20
    {title:"How to setup vscode-remote on Windows 10 without Docker Desktop?",content:"I've been using VSCode's remote containers capabilities for some time - such a helpful extension. Problem is, Docker Desktop changed their licensing model and devs are being told not to install it on our machines anymore. Does anybody know how to setup vscode-remote on a Win 10 system without Docker Desktop? Is there a way to use other container engines? This could be directly installing on Windows OS or installing on WSL2.",user_id:29,createdAt:new Date(),updatedAt: new Date()},//21
    {title:"Underscore and dash in column names after JSON import",content:"I've been using OpenRefine very successfully for a couple of years, working solely with CSV (and TSV) source files. Recently I had some tables from an sql database that I wanted to bring into OpenRefine so I exported them (from SQL) as JSON and then used OpenRefine's JSON import feature.",user_id:24,createdAt:new Date(),updatedAt: new Date()},//22
    {title:"Settings required for Audiokit engine",content:"I'm trying to run the tuner part of the cookbook so as to use it as a starter for another project. The cookbook version works well but my project must be missing a setting somewhere. The controller fails with throwing -10878",user_id:71,createdAt:new Date(),updatedAt: new Date()},//23
    {title:"Do I need babel along with ts-loader?",content:"I have a Webpack environment set up, and I decided to switch to TypeScript. I followed this guide on Webpack's documentation. Everything is working fine, but I was wondering if I need babel anymore. I deleted it from my webpack.config.js and the output is the same.",user_id:31,createdAt:new Date(),updatedAt: new Date()},//24
    {title:"Alert condition based on color change",content:"Hello I'd like to create an alert on this script when trend color change. Can someone help me please thanks in advance",user_id:26,createdAt:new Date(),updatedAt: new Date()},//25
    {title:"Create dummy variable using tidyverse?",content:"How would you create a dummy variable using tidyverse? I can do it in the base R syntax by using the ifelse function, but I'm stumped by how to do it using a tidyverse function.",user_id:29,createdAt:new Date(),updatedAt: new Date()},//26
    {title:"How to export Ionic Storage data into a file?",content:"I'm designing a mobile app and I'll be using Ionic. I will store user's data in their storage. In the case they want to export their data to another smartphone, I was planning to incorporate an «export» and an «import» buttons so they could generate a file with their stored data and then import it using that file in another device. For storage I was thinking about using Ionic Storage, as I saw it was the most popular solution. I could iterate through its entries while building the file. However, I was wondering if there could be any better solution, as I think what I'm trying to do is not that weird.",user_id:12,createdAt:new Date(),updatedAt: new Date()},//27
    {title:"Aiogram problem with sending forward message",content:"I have the id of the users and the id of the forward messages that I need to send by this user in the bot. This should not be sent to a separate channel, but directly in the bot to the user. send_forward won't help, because chat_id must be specified there. send_message won't help because you can't specify a forward message there",user_id:39,createdAt:new Date(),updatedAt: new Date()},//28
    {title:"How to extract request payload variable to test from a GQL request payload in postman",content:"I am writing tests in postman and i am having GQL POST request, in which i need to extract the GQL variables in test to validate and write script. But i cant able to extract the GQL variables. Is there any methods available to extract GQL variables like we have in json, var req = JSON.parse(pm.request.body.raw);.",user_id:45,createdAt:new Date(),updatedAt: new Date()},//29
    {title:"Run only one build pipeline task on a schedule",content:"Is it possible to run only one build pipeline task on a schedule and not the whole pipeline on a schedule? I have a task in a build pipeline to generate some report about the pipeline. I would want the task to run once every month.",user_id:49,createdAt:new Date(),updatedAt: new Date()},//30

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
