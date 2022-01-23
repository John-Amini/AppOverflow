'use strict';

const faker = require("faker");

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
    return queryInterface.bulkInsert('Comments', [
      { answer_id: 2, user_id: 1, content: "did he ever say when he'd fix 6.6.6", createdAt: new Date(), updatedAt: new Date() },
      { answer_id: 1, user_id: 4, content: "Anything more specific or just 5?", createdAt: new Date(), updatedAt: new Date() },
      { answer_id: 6, user_id: 4, content: "Dont forget to be on version 5 not 6 just in case", createdAt: new Date(), updatedAt: new Date() },
      { answer_id: 4, user_id: 7, content: "I cant believe I missed that....", createdAt: new Date(), updatedAt: new Date() },
      { answer_id: 4, user_id: 1, content: "Can also do if(curr>max)", createdAt: new Date(), updatedAt: new Date() },
      { answer_id: Math.floor(Math.random() * 32 + 1), user_id: Math.floor(Math.random() * 69 + 1), content: faker.random.words(Math.floor(Math.random() * 20)), createdAt: new Date(), updatedAt: new Date() },
      { answer_id: Math.floor(Math.random() * 32 + 1), user_id: Math.floor(Math.random() * 69 + 1), content: faker.random.words(Math.floor(Math.random() * 20)), createdAt: new Date(), updatedAt: new Date() },
      { answer_id: Math.floor(Math.random() * 32 + 1), user_id: Math.floor(Math.random() * 69 + 1), content: faker.random.words(Math.floor(Math.random() * 20)), createdAt: new Date(), updatedAt: new Date() },
      { answer_id: Math.floor(Math.random() * 32 + 1), user_id: Math.floor(Math.random() * 69 + 1), content: faker.random.words(Math.floor(Math.random() * 20)), createdAt: new Date(), updatedAt: new Date() },
      { answer_id: Math.floor(Math.random() * 32 + 1), user_id: Math.floor(Math.random() * 69 + 1), content: faker.random.words(Math.floor(Math.random() * 20)), createdAt: new Date(), updatedAt: new Date() },
      { answer_id: Math.floor(Math.random() * 32 + 1), user_id: Math.floor(Math.random() * 69 + 1), content: faker.random.words(Math.floor(Math.random() * 20)), createdAt: new Date(), updatedAt: new Date() },
      { answer_id: Math.floor(Math.random() * 32 + 1), user_id: Math.floor(Math.random() * 69 + 1), content: faker.random.words(Math.floor(Math.random() * 20)), createdAt: new Date(), updatedAt: new Date() },
      { answer_id: Math.floor(Math.random() * 32 + 1), user_id: Math.floor(Math.random() * 69 + 1), content: faker.random.words(Math.floor(Math.random() * 20)), createdAt: new Date(), updatedAt: new Date() },
      { answer_id: Math.floor(Math.random() * 32 + 1), user_id: Math.floor(Math.random() * 69 + 1), content: faker.random.words(Math.floor(Math.random() * 20)), createdAt: new Date(), updatedAt: new Date() },
      { answer_id: Math.floor(Math.random() * 32 + 1), user_id: Math.floor(Math.random() * 69 + 1), content: faker.random.words(Math.floor(Math.random() * 20)), createdAt: new Date(), updatedAt: new Date() },
      { answer_id: Math.floor(Math.random() * 32 + 1), user_id: Math.floor(Math.random() * 69 + 1), content: faker.random.words(Math.floor(Math.random() * 20)), createdAt: new Date(), updatedAt: new Date() },
      { answer_id: Math.floor(Math.random() * 32 + 1), user_id: Math.floor(Math.random() * 69 + 1), content: faker.random.words(Math.floor(Math.random() * 20)), createdAt: new Date(), updatedAt: new Date() },
      { answer_id: Math.floor(Math.random() * 32 + 1), user_id: Math.floor(Math.random() * 69 + 1), content: faker.random.words(Math.floor(Math.random() * 20)), createdAt: new Date(), updatedAt: new Date() },
      { answer_id: Math.floor(Math.random() * 32 + 1), user_id: Math.floor(Math.random() * 69 + 1), content: faker.random.words(Math.floor(Math.random() * 20)), createdAt: new Date(), updatedAt: new Date() },
      { answer_id: Math.floor(Math.random() * 32 + 1), user_id: Math.floor(Math.random() * 69 + 1), content: faker.random.words(Math.floor(Math.random() * 20)), createdAt: new Date(), updatedAt: new Date() },
      { answer_id: Math.floor(Math.random() * 32 + 1), user_id: Math.floor(Math.random() * 69 + 1), content: faker.random.words(Math.floor(Math.random() * 20)), createdAt: new Date(), updatedAt: new Date() },
      { answer_id: Math.floor(Math.random() * 32 + 1), user_id: Math.floor(Math.random() * 69 + 1), content: faker.random.words(Math.floor(Math.random() * 20)), createdAt: new Date(), updatedAt: new Date() },
      { answer_id: Math.floor(Math.random() * 32 + 1), user_id: Math.floor(Math.random() * 69 + 1), content: faker.random.words(Math.floor(Math.random() * 20)), createdAt: new Date(), updatedAt: new Date() },
      { answer_id: Math.floor(Math.random() * 32 + 1), user_id: Math.floor(Math.random() * 69 + 1), content: faker.random.words(Math.floor(Math.random() * 20)), createdAt: new Date(), updatedAt: new Date() },
      { answer_id: Math.floor(Math.random() * 32 + 1), user_id: Math.floor(Math.random() * 69 + 1), content: faker.random.words(Math.floor(Math.random() * 20)), createdAt: new Date(), updatedAt: new Date() },
      { answer_id: Math.floor(Math.random() * 32 + 1), user_id: Math.floor(Math.random() * 69 + 1), content: faker.random.words(Math.floor(Math.random() * 20)), createdAt: new Date(), updatedAt: new Date() },
      { answer_id: Math.floor(Math.random() * 32 + 1), user_id: Math.floor(Math.random() * 69 + 1), content: faker.random.words(Math.floor(Math.random() * 20)), createdAt: new Date(), updatedAt: new Date() },
      { answer_id: Math.floor(Math.random() * 32 + 1), user_id: Math.floor(Math.random() * 69 + 1), content: faker.random.words(Math.floor(Math.random() * 20)), createdAt: new Date(), updatedAt: new Date() },
      { answer_id: Math.floor(Math.random() * 32 + 1), user_id: Math.floor(Math.random() * 69 + 1), content: faker.random.words(Math.floor(Math.random() * 20)), createdAt: new Date(), updatedAt: new Date() },
      { answer_id: Math.floor(Math.random() * 32 + 1), user_id: Math.floor(Math.random() * 69 + 1), content: faker.random.words(Math.floor(Math.random() * 20)), createdAt: new Date(), updatedAt: new Date() },
      { answer_id: Math.floor(Math.random() * 32 + 1), user_id: Math.floor(Math.random() * 69 + 1), content: faker.random.words(Math.floor(Math.random() * 20)), createdAt: new Date(), updatedAt: new Date() },

    ], {})

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Comments', null, {});
  }
};
