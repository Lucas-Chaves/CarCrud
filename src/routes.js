const express = require('express')
const carRoutes = require('./controller/carro')

const router = express.Router()


//Rota para check no server
router.get('/',async (req,res)=>{
    res.send('Server is running')
})

//Rota dos carros
router.get('/veiculos/:id*?', carRoutes.getCarros)
router.post('/veiculos', carRoutes.createCarro)
router.put('/veiculos/:id', carRoutes.putCar)
router.delete('/veiculos/:id', carRoutes.deleteCar)


module.exports = router