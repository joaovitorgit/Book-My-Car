const Car = require('./../src/entities/car')
const Customer = require('./../src/entities/customer')
const CarCategory = require('./../src/entities/carCategoryn ')
const faker = require('faker')
const {join} = require('path')
const seederBaseFolder = join(__dirname, "../", "database")

const carCategory = new CarCategory({
    id: faker.datatype.uuid(),
    name: faker.vehicle.type(),
    carIds: [],
    price: faker.finance.amount(20, 100)
})