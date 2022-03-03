"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
        const now = new Date();
        queryInterface.bulkInsert(
            "sections",
            [
                {
                    name: "営業部",
                    area_id: 1,
                    createdAt: now,
                    updatedAt: now,
                },
                {
                    name: "開発部",
                    area_id: 1,
                    createdAt: now,
                    updatedAt: now,
                },
                {
                    name: "営業部",
                    area_id: 2,
                    createdAt: now,
                    updatedAt: now,
                },
                {
                    name: "開発部",
                    area_id: 2,
                    createdAt: now,
                    updatedAt: now,
                },
            ],
            {}
        );
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    },
};
