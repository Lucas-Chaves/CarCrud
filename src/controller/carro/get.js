const query = require('../../../knex/knex')

const getCar = async (req, res) => {
    id = req.params.id
    name = req.query.name
    if (id != null) getbyId(req, res)
    if (name != null) getbyQuery(req,res)
    else getAllCars(req, res)
}


//get All cars 
const getAllCars = async (req, res) => {
    try {
        const carros = await query.select().from('carros')
        return res.status(200).json(carros)

    } catch (e) {
        e.message = "Missing some information"
        return res.status(400).send(e)
    }
}

//get by id 
const getbyId = async (req, res) => {
    try {
        const carros = await query.select().where('id', req.params.id).from('carros').first()
        return res.status(200).json(carros)
    } catch (e) {
        e.message = "Missing some information"
        return res.status(400).send(e)
    }

}

const getbyQuery = async (req, res) => {
    try {
        const carros = await query.select().where('veiculo', req.query.name).from('carros')
        return res.status(200).json(carros)
    } catch (e) {
        e.message = "Missing some information"
        return res.status(400).send(e)
    }
}


module.exports = { getCar }