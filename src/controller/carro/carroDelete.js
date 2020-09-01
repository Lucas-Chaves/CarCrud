const query = require('../../../knex/knex')


const deleteCar = async (req, res) => {

    try {
        const id = req.params.id

        const codeTrx = await query('carros')
            .where('id', id)
            .del()

        if (codeTrx == 0) throw ("id not found")

        res.status(200).json({ success: true })
    } catch (e) {
        var mensagem = ""
        e.message == "" ? mensagem = "request error" : mensagem = e
        return res.status(404).json({ "error": mensagem })
    }

}



module.exports = { deleteCar }