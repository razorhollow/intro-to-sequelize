'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    const date = new Date()

    await queryInterface.bulkInsert('Toys', [{
      name: 'bouncy ball',
      color: 'red',
      createdAt: date,
      updatedAt: date,
    },
    {
    name: 'feather mouse',
    color: 'gray',
    createdAt: date,
    updatedAt: date,
    }])
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('Toys', null, {})

  }
};
