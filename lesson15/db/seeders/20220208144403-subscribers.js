"use strict";

module.exports = {
    async up(queryInterface, sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */

        queryInterface.bulkInsert("Subscribers", [
            {
                name: "aaa",
                email: "bbb",
                zipcode: 11111,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: "aaa",
                email: "bbb",
                zipcode: 22222,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: "aaa",
                email: "bbb",
                zipcode: 33333,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: "aaa",
                email: "bbb",
                zipcode: 44444,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: "aaa",
                email: "bbb",
                zipcode: 55555,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: "aaa",
                email: "bbb",
                zipcode: 66666,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: "aaa",
                email: "bbb",
                zipcode: 77777,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: "aaa",
                email: "bbb",
                zipcode: 88888,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: "aaa",
                email: "bbb",
                zipcode: 99999,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: "aaa",
                email: "bbb",
                zipcode: 10000,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    async down(queryInterface, sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    },
};
