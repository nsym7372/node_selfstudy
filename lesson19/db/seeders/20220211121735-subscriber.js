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
        const course_id = queryInterface
            .rawSelect("courses", {}, ["id"])
            .then((course_id) => {
                const course = queryInterface.bulkInsert(
                    "subscribers",
                    [
                        {
                            name: "aaa",
                            email: "aaa@sample.com",
                            zipcode: 11111,
                            createdAt: new Date(),
                            updatedAt: new Date(),
                            course_id: course_id,
                        },
                        {
                            name: "bbb",
                            email: "bbb@sample.com",
                            zipcode: 22222,
                            createdAt: new Date(),
                            updatedAt: new Date(),
                        },
                        {
                            name: "ccc",
                            email: "ccc@sample.com",
                            zipcode: 33333,
                            createdAt: new Date(),
                            updatedAt: new Date(),
                        },
                    ],
                    {}
                );
            });
        console.log(course_id);
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        queryInterface.bulkDelete("subscribers", null, {});
    },
};
