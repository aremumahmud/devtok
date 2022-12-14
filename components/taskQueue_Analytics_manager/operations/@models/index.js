const operationClass = require('./operationClass')
const modelConfigs = require('./modelConfigs')


class Models {
    constructor(modelConfig) {
        this.operation = null
        this.exec = exec
        this.modelConfig = modelConfig
    }

    resolve(type) {
        let config = this.modelConfig[type]
        return this.createOperation(config)

    }

    createOperation(config) {
        return operationClass(config)
    }
}


module.exports = new Models(modelConfigs)