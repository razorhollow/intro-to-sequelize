'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    //add column:
    await queryInterface.addColumn('Cats', 'breed', { type: Sequelize.STRING })
  },

  async down (queryInterface, Sequelize) {
    //remove column
    await queryInterface.removeColumn('Cats', 'breed')
  }
};
