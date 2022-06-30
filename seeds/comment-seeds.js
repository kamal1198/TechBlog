const { Comment } = require('../models');

const commentData = [
    {
        comment_text: 'Test comment',
        user_id: 1,
        post_id: 1,
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
