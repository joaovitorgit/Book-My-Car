const {describe, it} = require('mocha')
const CarService = require('../../src/service/carService')
const {join} = require('path')


const carsDatabase = join(__dirname, "./../../database", "cars.json")

describe('CarService Suite tests', ()=>{
    let carService = {}
    before(()=>{
        carService = new CarService({
            cars: carsDatabase
        })
    })
    it('Must return a avaiable car of a given car category', async ()=>{
        const result = await carService.test("ecfd1ed1-8640-4625-8440-2edd51e8b07f")
        console.log(result)
    })
    // 8:54
})