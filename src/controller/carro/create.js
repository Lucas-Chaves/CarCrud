const query = require('../../../knex/knex')
const moment = require('moment');


const createCar = async (req, res) => {
    //Create a new car
    try {

        //Pega body da requisiçoes
        const {
            veiculo,
            marca,
            ano,
            descricao,
            vendido,
        } = req.body;

        //Começa a transaçao no banco
        const trx = await query.transaction();

        const carro = await trx('carros').insert({
            veiculo: veiculo,
            marca: marca,
            ano: ano,
            descricao: descricao,
            vendido: vendido,
        })
        await trx.commit();

        //cria um json para retorno 
        const jsonCarro = {
            "id": carro[0],
            "veiculo": veiculo,
            "marca": marca,
            "ano": ano,
            "descricao": descricao,
            "vendido": vendido,
            "created_at": moment().format(),
            "updated_at": moment().format()
        }

        res.status(201).send(jsonCarro)
    } catch (e) {
        await trx.rollback();
        e.message = "Missing some information"
        return res.status(400).send(e)

    }
}


module.exports = { createCar }