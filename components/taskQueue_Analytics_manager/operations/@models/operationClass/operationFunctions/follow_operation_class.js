const db = require('../../../../db_service_component')

class followOperation {
    constructor(config) {
        this.config = config
    }

    exec(callback) {
        db.FollowUser({
            userId: this.config.userId,
            date: this.config.time,
        }).then(res => {
            this.config.status = 'done'
            callback(null, res)
        }).catch(err => {
            this.config.status = 'failed'
            callback(err, null)
        })
    }
}

module.exports = followOperation