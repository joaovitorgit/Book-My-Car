const Base = require('./base/base')

class Car extends Base{
    constructor({id, name, releaseYear, avaiable, gasAvaiable}){
        super({id, name})
        this.releaseYear =  releaseYear
        this.avaiable =  avaiable
        this.gasAvaiable = gasAvaiable
    }
}

module.exports = Car