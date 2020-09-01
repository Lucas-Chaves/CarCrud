const { createCar } = require('./create');
const { getCar } = require('./get')
const { deleteCar } = require('./delete')
const { putCar } = require('./put')




module.exports = {
    createCar,
    getCar,
    deleteCar,
    putCar
}