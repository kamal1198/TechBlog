const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

Post.belongsTo(User, {
    foreignKey: 'user_id',
});

Post.hasMany(Comment, {
    foreignKey: 'postId',
    onDelete: 'CASCADE',
    hooks: true,
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
    hooks: true,
});

Comment.belongsTo(Post, {
    foreignKey: 'user_id',
    onDelete: 'cascade',
    hooks: true,
});

User.hasMany(Post, {
    foreignKey: 'user_id',
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'cascade',
    hooks: true,
});

module.exports = { User, Post, Comment };
