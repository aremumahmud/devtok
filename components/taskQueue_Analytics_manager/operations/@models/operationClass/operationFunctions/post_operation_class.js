const db = require('../../../../db_service_component')

class postOperation {
    constructor(config) {
        this.config = config
    }

    exec(callback) {
        db.postMedia({
            uri: this.config.mediaUrl,
            date: this.config.time,
            user: this.config.user
        }).then(res => {
            callback(null, res)
        }).catch(err => {
            callback(err, null)
        })
    }
}

module.exports = postOperation