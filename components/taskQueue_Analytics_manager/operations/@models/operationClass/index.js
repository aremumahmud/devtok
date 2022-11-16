const devtokError = require('../../../error_management_service_component')
const likeOperationClass = require('./operationFunctions/like_operation_class')
const followOperationClass = require('./operationFunctions/follow_operation_class')
const postOperationClass = require('./operationFunctions/post_operation_class')

function operation_factory(config) {
    if (config.type == null || config.type == undefined || config == undefined || config == null) {
        devtokError.reportVerboseError('operation factory')
    } else if (config.type == 'post_operation') {
        return postOperationClass
    } else if (config.type == 'like_operation') {
        return likeOperationClass
    } else if (config.type == 'follow_operation') {
        return followOperationClass
    } else {
        devtokError.reportUndefinedOperation('operation factory')
    }
}

module.exports = operation_factory