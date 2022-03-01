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
        await queryInterface.bulkInsert(
            "areas",
            [
                {
                    name: "関西",
                    createdAt: now,
                    updatedAt: now,
                },
                {
                    name: "関東",
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
        await queryInterface.bulkDelete("sections", null, {}).then(() => {
            queryInterface.bulkDelete("areas", null, {});
        });
    },
};
