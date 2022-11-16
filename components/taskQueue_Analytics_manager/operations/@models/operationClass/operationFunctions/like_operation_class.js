const db = require('../../../../db_service_component')

class likeOperation {
    constructor() {

    }

    exec(callback) {
        db.postMedia({
            mediaId: this.config.mediaId,
            date: this.config.time,
        }).then(res => {
            callback(null, res)
        }).catch(err => {
            callback(err, null)
        })
    }
}

module.exports = likeOperation