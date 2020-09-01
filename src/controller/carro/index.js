const { createCarro } = require('./carroCreate');
const { getCarros } = require('./carroGet')
const { deleteCar } = require('./carroDelete')
const { putCar } = require('./carroPut')




module.exports = {
    createCarro,
    getCarros,
    deleteCar,
    putCar
}