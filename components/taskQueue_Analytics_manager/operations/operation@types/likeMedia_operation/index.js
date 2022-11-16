//const db = require('../../../../db_service_component')
const models = require('../../@models')


const operation_model = model.resolve('like_operation')

/*
 * @access 
 * @api 
 * @descrp
 */

function createLikeOperation(mediaId) {
    return new operation_model({
        mediaId,
        time: new Date(),
        status: 'pending'
    })
}
module.exports = createLikeOperation