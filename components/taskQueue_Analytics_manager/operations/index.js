const operation_types = require('./operation@types')
const Transport = require('./@transport')


class Operations {

    constructor() {
        this.operations = []
    }

    resolve(operation_type) {
        let operation = operation_types[operation_type]
        return {
            createOperation: (config) => {
                this.operations.push({
                    operation: operation(config),
                    operation_type
                })
                return operation(config)
            }
        }
    }


    showOperations(modeOfTransport) {
        const templ = (op, dt) => {
            let data = JSON.stringify(dt).split('\n').join('')
            let operation = op.split('_').join(' ')
            return `a ${operation} with datasets ${data}`
        }
        let transport = this.operations.map(operation => {
            return templ(operation.operation_type, operation.operation)
        })
        let transporter = new Transport()
        transporter.resolve(modeOfTransport).transport(transport)
    }
}

module.exports = Operations