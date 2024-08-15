'use strict';
const products = require("../products.json")

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Products', products.map((e) => {
      e.createdAt = e.updatedAt = new Date()
      return e
    }))
    // console.log(products);
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('People', null, {
      truncate: true,
      cascade: true,
      restardIdentity: true

    })
  }
};
