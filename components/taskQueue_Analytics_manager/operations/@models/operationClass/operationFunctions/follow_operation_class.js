const db = require('../../../../db_service_component')

class followOperation {
    constructor() {

    }

    exec(callback) {
        db.FollowUser({
            userId: this.config.userId,
            date: this.config.time,
        }).then(res => {
            callback(null, res)
        }).catch(err => {
            callback(err, null)
        })
    }
}

module.exports = followOperation