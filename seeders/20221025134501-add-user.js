'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  
      await queryInterface.bulkInsert('users', [
        {
        name: 'Cristian ',
        email: 'cbo@misena.edu.co ',
        password: '3559'
        },
        {
        name: 'Samuel ',
        email: 'sammu@misena.edu.co ',
        password: '3889'
        }
    ], {});
  
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('users', null, {});

  }
};
