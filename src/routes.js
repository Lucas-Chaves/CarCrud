const express = require('express')
const car = require('./controller/carro')

const router = express.Router()


//Rota para check no server
router.get('/',async (req,res)=>{
    res.send('Server is running')
})

//Rota dos carros
router.get('/veiculos/:id*?', car.getCar)
router.post('/veiculos', car.createCar)
router.put('/veiculos/:id', car.putCar)
router.delete('/veiculos/:id', car.deleteCar)


module.exports = router