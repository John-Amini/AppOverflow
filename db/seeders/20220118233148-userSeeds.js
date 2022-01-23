'use strict';
const faker = require("faker");
const bcrypt = require("bcryptjs")
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
   return queryInterface.bulkInsert('Users',[
     {username:'testinguser1',email:'testinguser1@gmail.com',hashed_password:'password',createdAt: new Date(),updatedAt:new Date()},
     {username:faker.internet.userName(),email:faker.internet.email(),hashed_password: bcrypt.hashSync(faker.internet.password(), 10), createdAt:new Date(),updatedAt:new Date()},
     {username:faker.internet.userName(),email:faker.internet.email(),hashed_password: bcrypt.hashSync(faker.internet.password(), 10), createdAt:new Date(),updatedAt:new Date()},
     {username:faker.internet.userName(),email:faker.internet.email(),hashed_password: bcrypt.hashSync(faker.internet.password(), 10), createdAt:new Date(),updatedAt:new Date()},
     {username:faker.internet.userName(),email:faker.internet.email(),hashed_password: bcrypt.hashSync(faker.internet.password(), 10), createdAt:new Date(),updatedAt:new Date()},
     {username:faker.internet.userName(),email:faker.internet.email(),hashed_password: bcrypt.hashSync(faker.internet.password(), 10), createdAt:new Date(),updatedAt:new Date()},
     {username:faker.internet.userName(),email:faker.internet.email(),hashed_password: bcrypt.hashSync(faker.internet.password(), 10), createdAt:new Date(),updatedAt:new Date()},
     {username:faker.internet.userName(),email:faker.internet.email(),hashed_password: bcrypt.hashSync(faker.internet.password(), 10), createdAt:new Date(),updatedAt:new Date()},
     {username:faker.internet.userName(),email:faker.internet.email(),hashed_password: bcrypt.hashSync(faker.internet.password(), 10), createdAt:new Date(),updatedAt:new Date()},
     {username:faker.internet.userName(),email:faker.internet.email(),hashed_password: bcrypt.hashSync(faker.internet.password(), 10), createdAt:new Date(),updatedAt:new Date()},
     {username:faker.internet.userName(),email:faker.internet.email(),hashed_password: bcrypt.hashSync(faker.internet.password(), 10), createdAt:new Date(),updatedAt:new Date()},
     {username:faker.internet.userName(),email:faker.internet.email(),hashed_password: bcrypt.hashSync(faker.internet.password(), 10), createdAt:new Date(),updatedAt:new Date()},
     {username:faker.internet.userName(),email:faker.internet.email(),hashed_password: bcrypt.hashSync(faker.internet.password(), 10), createdAt:new Date(),updatedAt:new Date()},
     {username:faker.internet.userName(),email:faker.internet.email(),hashed_password: bcrypt.hashSync(faker.internet.password(), 10), createdAt:new Date(),updatedAt:new Date()},
     {username:faker.internet.userName(),email:faker.internet.email(),hashed_password: bcrypt.hashSync(faker.internet.password(), 10), createdAt:new Date(),updatedAt:new Date()},
     {username:faker.internet.userName(),email:faker.internet.email(),hashed_password: bcrypt.hashSync(faker.internet.password(), 10), createdAt:new Date(),updatedAt:new Date()},
     {username:faker.internet.userName(),email:faker.internet.email(),hashed_password: bcrypt.hashSync(faker.internet.password(), 10), createdAt:new Date(),updatedAt:new Date()},
     {username:faker.internet.userName(),email:faker.internet.email(),hashed_password: bcrypt.hashSync(faker.internet.password(), 10), createdAt:new Date(),updatedAt:new Date()},
     {username:faker.internet.userName(),email:faker.internet.email(),hashed_password: bcrypt.hashSync(faker.internet.password(), 10), createdAt:new Date(),updatedAt:new Date()},
     {username:faker.internet.userName(),email:faker.internet.email(),hashed_password: bcrypt.hashSync(faker.internet.password(), 10), createdAt:new Date(),updatedAt:new Date()},
     {username:faker.internet.userName(),email:faker.internet.email(),hashed_password: bcrypt.hashSync(faker.internet.password(), 10), createdAt:new Date(),updatedAt:new Date()},
     {username:faker.internet.userName(),email:faker.internet.email(),hashed_password: bcrypt.hashSync(faker.internet.password(), 10), createdAt:new Date(),updatedAt:new Date()},
     {username:faker.internet.userName(),email:faker.internet.email(),hashed_password: bcrypt.hashSync(faker.internet.password(), 10), createdAt:new Date(),updatedAt:new Date()},
     {username:faker.internet.userName(),email:faker.internet.email(),hashed_password: bcrypt.hashSync(faker.internet.password(), 10), createdAt:new Date(),updatedAt:new Date()},
     {username:faker.internet.userName(),email:faker.internet.email(),hashed_password: bcrypt.hashSync(faker.internet.password(), 10), createdAt:new Date(),updatedAt:new Date()},
     {username:faker.internet.userName(),email:faker.internet.email(),hashed_password: bcrypt.hashSync(faker.internet.password(), 10), createdAt:new Date(),updatedAt:new Date()},
     {username:faker.internet.userName(),email:faker.internet.email(),hashed_password: bcrypt.hashSync(faker.internet.password(), 10), createdAt:new Date(),updatedAt:new Date()},
     {username:faker.internet.userName(),email:faker.internet.email(),hashed_password: bcrypt.hashSync(faker.internet.password(), 10), createdAt:new Date(),updatedAt:new Date()},
     {username:faker.internet.userName(),email:faker.internet.email(),hashed_password: bcrypt.hashSync(faker.internet.password(), 10), createdAt:new Date(),updatedAt:new Date()},
     {username:faker.internet.userName(),email:faker.internet.email(),hashed_password: bcrypt.hashSync(faker.internet.password(), 10), createdAt:new Date(),updatedAt:new Date()},
     {username:faker.internet.userName(),email:faker.internet.email(),hashed_password: bcrypt.hashSync(faker.internet.password(), 10), createdAt:new Date(),updatedAt:new Date()},
     {username:faker.internet.userName(),email:faker.internet.email(),hashed_password: bcrypt.hashSync(faker.internet.password(), 10), createdAt:new Date(),updatedAt:new Date()},
     {username:faker.internet.userName(),email:faker.internet.email(),hashed_password: bcrypt.hashSync(faker.internet.password(), 10), createdAt:new Date(),updatedAt:new Date()},
     {username:faker.internet.userName(),email:faker.internet.email(),hashed_password: bcrypt.hashSync(faker.internet.password(), 10), createdAt:new Date(),updatedAt:new Date()},
     {username:faker.internet.userName(),email:faker.internet.email(),hashed_password: bcrypt.hashSync(faker.internet.password(), 10), createdAt:new Date(),updatedAt:new Date()},
     {username:faker.internet.userName(),email:faker.internet.email(),hashed_password: bcrypt.hashSync(faker.internet.password(), 10), createdAt:new Date(),updatedAt:new Date()},
     {username:faker.internet.userName(),email:faker.internet.email(),hashed_password: bcrypt.hashSync(faker.internet.password(), 10), createdAt:new Date(),updatedAt:new Date()},
     {username:faker.internet.userName(),email:faker.internet.email(),hashed_password: bcrypt.hashSync(faker.internet.password(), 10), createdAt:new Date(),updatedAt:new Date()},
     {username:faker.internet.userName(),email:faker.internet.email(),hashed_password: bcrypt.hashSync(faker.internet.password(), 10), createdAt:new Date(),updatedAt:new Date()},
     {username:faker.internet.userName(),email:faker.internet.email(),hashed_password: bcrypt.hashSync(faker.internet.password(), 10), createdAt:new Date(),updatedAt:new Date()},
     {username:faker.internet.userName(),email:faker.internet.email(),hashed_password: bcrypt.hashSync(faker.internet.password(), 10), createdAt:new Date(),updatedAt:new Date()},
     {username:faker.internet.userName(),email:faker.internet.email(),hashed_password: bcrypt.hashSync(faker.internet.password(), 10), createdAt:new Date(),updatedAt:new Date()},
     {username:faker.internet.userName(),email:faker.internet.email(),hashed_password: bcrypt.hashSync(faker.internet.password(), 10), createdAt:new Date(),updatedAt:new Date()},
     {username:faker.internet.userName(),email:faker.internet.email(),hashed_password: bcrypt.hashSync(faker.internet.password(), 10), createdAt:new Date(),updatedAt:new Date()},
     {username:faker.internet.userName(),email:faker.internet.email(),hashed_password: bcrypt.hashSync(faker.internet.password(), 10), createdAt:new Date(),updatedAt:new Date()},
     {username:faker.internet.userName(),email:faker.internet.email(),hashed_password: bcrypt.hashSync(faker.internet.password(), 10), createdAt:new Date(),updatedAt:new Date()},
     {username:faker.internet.userName(),email:faker.internet.email(),hashed_password: bcrypt.hashSync(faker.internet.password(), 10), createdAt:new Date(),updatedAt:new Date()},
     {username:faker.internet.userName(),email:faker.internet.email(),hashed_password: bcrypt.hashSync(faker.internet.password(), 10), createdAt:new Date(),updatedAt:new Date()},
     {username:faker.internet.userName(),email:faker.internet.email(),hashed_password: bcrypt.hashSync(faker.internet.password(), 10), createdAt:new Date(),updatedAt:new Date()},
     {username:faker.internet.userName(),email:faker.internet.email(),hashed_password: bcrypt.hashSync(faker.internet.password(), 10), createdAt:new Date(),updatedAt:new Date()},
     {username:faker.internet.userName(),email:faker.internet.email(),hashed_password: bcrypt.hashSync(faker.internet.password(), 10), createdAt:new Date(),updatedAt:new Date()},
     {username:faker.internet.userName(),email:faker.internet.email(),hashed_password: bcrypt.hashSync(faker.internet.password(), 10), createdAt:new Date(),updatedAt:new Date()},
     {username:faker.internet.userName(),email:faker.internet.email(),hashed_password: bcrypt.hashSync(faker.internet.password(), 10), createdAt:new Date(),updatedAt:new Date()},
     {username:faker.internet.userName(),email:faker.internet.email(),hashed_password: bcrypt.hashSync(faker.internet.password(), 10), createdAt:new Date(),updatedAt:new Date()},
     {username:faker.internet.userName(),email:faker.internet.email(),hashed_password: bcrypt.hashSync(faker.internet.password(), 10), createdAt:new Date(),updatedAt:new Date()},
     {username:faker.internet.userName(),email:faker.internet.email(),hashed_password: bcrypt.hashSync(faker.internet.password(), 10), createdAt:new Date(),updatedAt:new Date()},
     {username:faker.internet.userName(),email:faker.internet.email(),hashed_password: bcrypt.hashSync(faker.internet.password(), 10), createdAt:new Date(),updatedAt:new Date()},
     {username:faker.internet.userName(),email:faker.internet.email(),hashed_password: bcrypt.hashSync(faker.internet.password(), 10), createdAt:new Date(),updatedAt:new Date()},
     {username:faker.internet.userName(),email:faker.internet.email(),hashed_password: bcrypt.hashSync(faker.internet.password(), 10), createdAt:new Date(),updatedAt:new Date()},
     {username:faker.internet.userName(),email:faker.internet.email(),hashed_password: bcrypt.hashSync(faker.internet.password(), 10), createdAt:new Date(),updatedAt:new Date()},
     {username:faker.internet.userName(),email:faker.internet.email(),hashed_password: bcrypt.hashSync(faker.internet.password(), 10), createdAt:new Date(),updatedAt:new Date()},
     {username:faker.internet.userName(),email:faker.internet.email(),hashed_password: bcrypt.hashSync(faker.internet.password(), 10), createdAt:new Date(),updatedAt:new Date()},
     {username:faker.internet.userName(),email:faker.internet.email(),hashed_password: bcrypt.hashSync(faker.internet.password(), 10), createdAt:new Date(),updatedAt:new Date()},
     {username:faker.internet.userName(),email:faker.internet.email(),hashed_password: bcrypt.hashSync(faker.internet.password(), 10), createdAt:new Date(),updatedAt:new Date()},
     {username:faker.internet.userName(),email:faker.internet.email(),hashed_password: bcrypt.hashSync(faker.internet.password(), 10), createdAt:new Date(),updatedAt:new Date()},
     {username:faker.internet.userName(),email:faker.internet.email(),hashed_password: bcrypt.hashSync(faker.internet.password(), 10), createdAt:new Date(),updatedAt:new Date()},
     {username:faker.internet.userName(),email:faker.internet.email(),hashed_password: bcrypt.hashSync(faker.internet.password(), 10), createdAt:new Date(),updatedAt:new Date()},
     {username:faker.internet.userName(),email:faker.internet.email(),hashed_password: bcrypt.hashSync(faker.internet.password(), 10), createdAt:new Date(),updatedAt:new Date()},
     {username:faker.internet.userName(),email:faker.internet.email(),hashed_password: bcrypt.hashSync(faker.internet.password(), 10), createdAt:new Date(),updatedAt:new Date()},
     {username:faker.internet.userName(),email:faker.internet.email(),hashed_password: bcrypt.hashSync(faker.internet.password(), 10), createdAt:new Date(),updatedAt:new Date()},
     {username:faker.internet.userName(),email:faker.internet.email(),hashed_password: bcrypt.hashSync(faker.internet.password(), 10), createdAt:new Date(),updatedAt:new Date()},
     {username:faker.internet.userName(),email:faker.internet.email(),hashed_password: bcrypt.hashSync(faker.internet.password(), 10), createdAt:new Date(),updatedAt:new Date()},
     {username:faker.internet.userName(),email:faker.internet.email(),hashed_password: bcrypt.hashSync(faker.internet.password(), 10), createdAt:new Date(),updatedAt:new Date()},
     {username:faker.internet.userName(),email:faker.internet.email(),hashed_password: bcrypt.hashSync(faker.internet.password(), 10), createdAt:new Date(),updatedAt:new Date()},
     {username:faker.internet.userName(),email:faker.internet.email(),hashed_password: bcrypt.hashSync(faker.internet.password(), 10), createdAt:new Date(),updatedAt:new Date()},
     {username:faker.internet.userName(),email:faker.internet.email(),hashed_password: bcrypt.hashSync(faker.internet.password(), 10), createdAt:new Date(),updatedAt:new Date()},
     {username:faker.internet.userName(),email:faker.internet.email(),hashed_password: bcrypt.hashSync(faker.internet.password(), 10), createdAt:new Date(),updatedAt:new Date()},
     {username:faker.internet.userName(),email:faker.internet.email(),hashed_password: bcrypt.hashSync(faker.internet.password(), 10), createdAt:new Date(),updatedAt:new Date()},
     {username:faker.internet.userName(),email:faker.internet.email(),hashed_password: bcrypt.hashSync(faker.internet.password(), 10), createdAt:new Date(),updatedAt:new Date()},
     {username:faker.internet.userName(),email:faker.internet.email(),hashed_password: bcrypt.hashSync(faker.internet.password(), 10), createdAt:new Date(),updatedAt:new Date()},
     {username:faker.internet.userName(),email:faker.internet.email(),hashed_password: bcrypt.hashSync(faker.internet.password(), 10), createdAt:new Date(),updatedAt:new Date()},
     {username:faker.internet.userName(),email:faker.internet.email(),hashed_password: bcrypt.hashSync(faker.internet.password(), 10), createdAt:new Date(),updatedAt:new Date()},
     {username:faker.internet.userName(),email:faker.internet.email(),hashed_password: bcrypt.hashSync(faker.internet.password(), 10), createdAt:new Date(),updatedAt:new Date()},
     {username:faker.internet.userName(),email:faker.internet.email(),hashed_password: bcrypt.hashSync(faker.internet.password(), 10), createdAt:new Date(),updatedAt:new Date()},

    ],{})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('Users',null,{});
  }
};
