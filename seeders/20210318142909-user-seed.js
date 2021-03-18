"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Admins",
      [
        {
          name: "admin",
          email: "root@example.com",
          password: "12345678",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Liv",
          email: "liv@example.com",
          password: "12345678",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Admins", null, {});
  },
};
