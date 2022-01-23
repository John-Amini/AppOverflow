'use strict';

const faker = require('faker')


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
    return queryInterface.bulkInsert('Answers', [
      { content: "You have to install faker version 5 instead of 6 in the package.json", question_id: 6, user_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { content: "Version 6.6.6 broke something it seems so install version 5.5.3", question_id: 6, user_id: 3, createdAt: new Date(), updatedAt: new Date() },
      { content: "One of the main things is to put them all into a views folder", question_id: 5, user_id: 4, createdAt: new Date(), updatedAt: new Date() },
      { content: "Yeah your if statement is off it should be if(max<curr)", question_id: 7, user_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { content: "If you have a .env file you should be running sequelize with dotenv like npx dotenv sequelize", question_id: 9, user_id: 5, createdAt: new Date(), updatedAt: new Date() },
      { content: "You want to use faker.internet.email after importing it", question_id: 4, user_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { content: faker.random.words(20), question_id: 1, user_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { content: faker.random.words(10), question_id: 2, user_id: 3, createdAt: new Date(), updatedAt: new Date() },
      // { content: faker.random.words(5), question_id: 25, user_id: 4, createdAt: new Date(), updatedAt: new Date() },
      // { content: faker.random.words(15), question_id: 30, user_id: 30, createdAt: new Date(), updatedAt: new Date() },
      // { content: faker.random.words(19), question_id: 19, user_id: 27, createdAt: new Date(), updatedAt: new Date() },
      // { content: faker.random.words(3), question_id: 6, user_id: 17, createdAt: new Date(), updatedAt: new Date() },
      // { content: faker.random.words(18), question_id: 16, user_id: 3, createdAt: new Date(), updatedAt: new Date() },
      { content: faker.random.words(18), question_id: 4, user_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { content: faker.random.words(10), question_id: 10, user_id: 2, createdAt: new Date(), updatedAt: new Date() },
      // { content: faker.random.words(18), question_id: 14, user_id: 5, createdAt: new Date(), updatedAt: new Date() },
      // { content: faker.random.words(9), question_id: 17, user_id: 7, createdAt: new Date(), updatedAt: new Date() },
      { content: faker.random.words(5), question_id: 5, user_id: 8, createdAt: new Date(), updatedAt: new Date() },
      { content: faker.random.words(7), question_id: 3, user_id: 8, createdAt: new Date(), updatedAt: new Date() },
      { content: faker.random.words(15), question_id: 2, user_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { content: faker.random.words(Math.floor(Math.random() * 20)), question_id: Math.floor(Math.random() * 29 + 1), user_id: Math.floor(Math.random() * 69 + 1), createdAt: new Date(), updatedAt: new Date() },
      { content: faker.random.words(Math.floor(Math.random() * 20)), question_id: Math.floor(Math.random() * 29 + 1), user_id: Math.floor(Math.random() * 69 + 1), createdAt: new Date(), updatedAt: new Date() },
      { content: faker.random.words(Math.floor(Math.random() * 20)), question_id: Math.floor(Math.random() * 29 + 1), user_id: Math.floor(Math.random() * 69 + 1), createdAt: new Date(), updatedAt: new Date() },
      { content: faker.random.words(Math.floor(Math.random() * 20)), question_id: Math.floor(Math.random() * 29 + 1), user_id: Math.floor(Math.random() * 69 + 1), createdAt: new Date(), updatedAt: new Date() },
      { content: faker.random.words(Math.floor(Math.random() * 20)), question_id: Math.floor(Math.random() * 29 + 1), user_id: Math.floor(Math.random() * 69 + 1), createdAt: new Date(), updatedAt: new Date() },
      { content: faker.random.words(Math.floor(Math.random() * 20)), question_id: Math.floor(Math.random() * 29 + 1), user_id: Math.floor(Math.random() * 69 + 1), createdAt: new Date(), updatedAt: new Date() },
      { content: faker.random.words(Math.floor(Math.random() * 20)), question_id: Math.floor(Math.random() * 29 + 1), user_id: Math.floor(Math.random() * 69 + 1), createdAt: new Date(), updatedAt: new Date() },
      { content: faker.random.words(Math.floor(Math.random() * 20)), question_id: Math.floor(Math.random() * 29 + 1), user_id: Math.floor(Math.random() * 69 + 1), createdAt: new Date(), updatedAt: new Date() },
      { content: faker.random.words(Math.floor(Math.random() * 20)), question_id: Math.floor(Math.random() * 29 + 1), user_id: Math.floor(Math.random() * 69 + 1), createdAt: new Date(), updatedAt: new Date() },
      { content: faker.random.words(Math.floor(Math.random() * 20)), question_id: Math.floor(Math.random() * 29 + 1), user_id: Math.floor(Math.random() * 69 + 1), createdAt: new Date(), updatedAt: new Date() },
      { content: faker.random.words(Math.floor(Math.random() * 20)), question_id: Math.floor(Math.random() * 29 + 1), user_id: Math.floor(Math.random() * 69 + 1), createdAt: new Date(), updatedAt: new Date() },
      { content: faker.random.words(Math.floor(Math.random() * 20)), question_id: Math.floor(Math.random() * 29 + 1), user_id: Math.floor(Math.random() * 69 + 1), createdAt: new Date(), updatedAt: new Date() },
      { content: faker.random.words(Math.floor(Math.random() * 20)), question_id: Math.floor(Math.random() * 29 + 1), user_id: Math.floor(Math.random() * 69 + 1), createdAt: new Date(), updatedAt: new Date() },
      { content: faker.random.words(Math.floor(Math.random() * 20)), question_id: Math.floor(Math.random() * 29 + 1), user_id: Math.floor(Math.random() * 69 + 1), createdAt: new Date(), updatedAt: new Date() },
      { content: faker.random.words(Math.floor(Math.random() * 20)), question_id: Math.floor(Math.random() * 29 + 1), user_id: Math.floor(Math.random() * 69 + 1), createdAt: new Date(), updatedAt: new Date() },
      { content: faker.random.words(Math.floor(Math.random() * 20)), question_id: Math.floor(Math.random() * 29 + 1), user_id: Math.floor(Math.random() * 69 + 1), createdAt: new Date(), updatedAt: new Date() },
      { content: faker.random.words(Math.floor(Math.random() * 20)), question_id: Math.floor(Math.random() * 29 + 1), user_id: Math.floor(Math.random() * 69 + 1), createdAt: new Date(), updatedAt: new Date() },
      { content: faker.random.words(Math.floor(Math.random() * 20)), question_id: Math.floor(Math.random() * 29 + 1), user_id: Math.floor(Math.random() * 69 + 1), createdAt: new Date(), updatedAt: new Date() },
      { content: faker.random.words(Math.floor(Math.random() * 20)), question_id: Math.floor(Math.random() * 29 + 1), user_id: Math.floor(Math.random() * 69 + 1), createdAt: new Date(), updatedAt: new Date() },
      { content: faker.random.words(Math.floor(Math.random() * 20)), question_id: Math.floor(Math.random() * 29 + 1), user_id: Math.floor(Math.random() * 69 + 1), createdAt: new Date(), updatedAt: new Date() },
      { content: faker.random.words(Math.floor(Math.random() * 20)), question_id: Math.floor(Math.random() * 29 + 1), user_id: Math.floor(Math.random() * 69 + 1), createdAt: new Date(), updatedAt: new Date() },
      { content: faker.random.words(Math.floor(Math.random() * 20)), question_id: Math.floor(Math.random() * 29 + 1), user_id: Math.floor(Math.random() * 69 + 1), createdAt: new Date(), updatedAt: new Date() },
      { content: faker.random.words(Math.floor(Math.random() * 20)), question_id: Math.floor(Math.random() * 29 + 1), user_id: Math.floor(Math.random() * 69 + 1), createdAt: new Date(), updatedAt: new Date() },
      { content: faker.random.words(Math.floor(Math.random() * 20)), question_id: Math.floor(Math.random() * 29 + 1), user_id: Math.floor(Math.random() * 69 + 1), createdAt: new Date(), updatedAt: new Date() },
      { content: faker.random.words(Math.floor(Math.random() * 20)), question_id: Math.floor(Math.random() * 29 + 1), user_id: Math.floor(Math.random() * 69 + 1), createdAt: new Date(), updatedAt: new Date() },
      { content: faker.random.words(Math.floor(Math.random() * 20)), question_id: Math.floor(Math.random() * 29 + 1), user_id: Math.floor(Math.random() * 69 + 1), createdAt: new Date(), updatedAt: new Date() },
      { content: faker.random.words(Math.floor(Math.random() * 20)), question_id: Math.floor(Math.random() * 29 + 1), user_id: Math.floor(Math.random() * 69 + 1), createdAt: new Date(), updatedAt: new Date() },
      { content: faker.random.words(Math.floor(Math.random() * 20)), question_id: Math.floor(Math.random() * 29 + 1), user_id: Math.floor(Math.random() * 69 + 1), createdAt: new Date(), updatedAt: new Date() },
      { content: faker.random.words(Math.floor(Math.random() * 20)), question_id: Math.floor(Math.random() * 29 + 1), user_id: Math.floor(Math.random() * 69 + 1), createdAt: new Date(), updatedAt: new Date() },
      { content: faker.random.words(Math.floor(Math.random() * 20)), question_id: Math.floor(Math.random() * 29 + 1), user_id: Math.floor(Math.random() * 69 + 1), createdAt: new Date(), updatedAt: new Date() },
      { content: faker.random.words(Math.floor(Math.random() * 20)), question_id: Math.floor(Math.random() * 29 + 1), user_id: Math.floor(Math.random() * 69 + 1), createdAt: new Date(), updatedAt: new Date() },
      { content: faker.random.words(Math.floor(Math.random() * 20)), question_id: Math.floor(Math.random() * 29 + 1), user_id: Math.floor(Math.random() * 69 + 1), createdAt: new Date(), updatedAt: new Date() },
      { content: faker.random.words(Math.floor(Math.random() * 20)), question_id: Math.floor(Math.random() * 29 + 1), user_id: Math.floor(Math.random() * 69 + 1), createdAt: new Date(), updatedAt: new Date() },
      { content: faker.random.words(Math.floor(Math.random() * 20)), question_id: Math.floor(Math.random() * 29 + 1), user_id: Math.floor(Math.random() * 69 + 1), createdAt: new Date(), updatedAt: new Date() },
      { content: faker.random.words(Math.floor(Math.random() * 20)), question_id: Math.floor(Math.random() * 29 + 1), user_id: Math.floor(Math.random() * 69 + 1), createdAt: new Date(), updatedAt: new Date() },


      // {content: "", question_id: , user_id: , createdAt: new Date(), updatedAt: new Date()},

    ], {})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Answers', null, {})

  }
};
