//const db = require('../../../../db_service_component')
const models = require('../../@models')

const operation_model = model.resolve('post_operation')

/*
 * @access 
 * @api 
 * @descrp
 */

function createPostOperation(config) {
    return new operation_model({
        mediaUrl: config.mediaUrl,
        userId: config.userId,
        socketId: config.socketId,
        time: new Date(),
        status: 'pending'
    })
}
module.exports = createPostOperation