'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('bootcamps', [
      {
      name: "Klo",
      phone: "324581695",
      average_cost: "24840",
      average_rating: "84500",
      },
      {
        name: "Fenerson",
        phone: "345812647",
        average_cost: "31033",
        average_rating: "65000",
      }
  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('bootcamps', null, {});

  }
};
