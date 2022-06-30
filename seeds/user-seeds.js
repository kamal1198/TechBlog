const { User } = require('../models');

const userData = [
    {
        username: 'johndoe',
        password: 'password',
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
