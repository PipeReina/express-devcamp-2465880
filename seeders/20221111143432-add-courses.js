'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('courses', [
      {
      title: "Los vectores de sus nalgas",
      descripcion: "una descripcion:v",
      weeks: "2",
      enroll_cost: "84500",
      minimum_skill: "perreo hasta el suelo"
      },
      {
        title: "El perreo",
        descripcion: "una descripcion:v2",
        weeks: "3",
        enroll_cost: "65000",
        minimum_skill: "perreo hasta el suelo2"
      }
  ], {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('courses', null, {});

  }
};
