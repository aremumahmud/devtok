//const db = require('../../../../db_service_component')
const models = require('../../@models')


const operation_model = models.resolve('follow_operation')

/*
 * @access 
 * @api 
 * @descrp
 */

function createFollowOperation(userId) {
    return new operation_model({
        userId,
        time: new Date(),
        status: 'pending'
    })
}
module.exports = createFollowOperation