const operation = require('../operations')


class batchOperation {
    constructor(concurency, duration) {
        //this.operations = []
        this.failed = []
        this.pending = []
        this.family = {}
    }


    addOperation(operation_descrp) {
        const self = this
        const family = operation.resolve(operation_descrp)
            //self.operations.push(family)
        if (this.family[family].length == 0) {
            this.family[family] = []
            this.family[family].push(operation.createOperation(family))
        } else {
            this.family[family].push(operation.createOperation(family))
        }
    }

    startOperation() {

    }


}