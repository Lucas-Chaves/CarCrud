const query = require('../../../knex/knex')
const moment = require('moment');
const e = require('express');


const putCar = async (req, res) => {
    try {
        const id = req.params.id
        //Pega body da requisiçoes
        const data = {
            veiculo,
            marca,
            ano,
            descricao,
            vendido,
        } = req.body;


        //Começa a transaçao no banco
        const trx = await query.transaction();

        const teste = await query('carros')
            .where({ id: id })
            .update({
                veiculo: veiculo,
                marca: marca,
                ano: ano,
                descricao: descricao,
                vendido: vendido,
                updated_at: moment().format(),
            })
        if (teste == 0) throw ("Id not found")
        trx.commit()

        return res.status(200).json(data)
    } catch (e) {
        e == null ? e = "Error request" : e;
        return res.status(400).json({ "error": e })
    }


}


module.exports = { putCar }