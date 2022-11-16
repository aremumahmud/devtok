const follow_operation = require('./followUser_operation')
const like_operation = require('./likeMedia_operation')
const post_operation = require('./post_media_operation')
const general_operation = require('./general_batchOperation')






module.exports = {
    follow_operation,
    like_operation,
    post_operation,
    general_operation
}