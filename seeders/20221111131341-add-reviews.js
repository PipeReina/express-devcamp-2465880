'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('reviews', [
      {
      name: "Andrea",
      title: "Los vectores",
      text: "Escolar",
      rating: "Buena:v"
      },
      {
      name: "Samuel ",
      title: "10 pescados",
      text: "Infantil",
      rating: "kljashdlkasdlkasjdlaksjdalskd"
      }
  ], {});

  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('reviews', null, {});

  }
};
