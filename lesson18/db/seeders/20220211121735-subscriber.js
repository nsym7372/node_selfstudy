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
        await queryInterface
            .bulkInsert("Courses", [
                {
                    name: "aaa",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ])
            .then((course) => {
                queryInterface.bulkInsert("Subscribers", [
                    {
                        name: "aaa",
                        email: "aaa@sample.com",
                        zipcode: 11111,
                        createdAt: new Date(),
                        updatedAt: new Date(),
                        course_id: course,
                    },
                    {
                        name: "aaa",
                        email: "aaa@sample.com",
                        zipcode: 22222,
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        name: "aaa",
                        email: "aaa@sample.com",
                        zipcode: 33333,
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                ]);
            });
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        queryInterface.bulkDelete("Subscribers", null, {}).then(() => {
            queryInterface.bulkDelete("Courses", null, {});
        });
    },
};
