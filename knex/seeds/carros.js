exports.seed = function (knex, Promise) {
    // Deletes ALL existing entries
    return knex('carros').del()
        .then(function () {
            // Inserts seed entries
            return knex('carros').insert([
                {
                    veiculo: "Corsa",
                    marca: "GM",
                    ano: 2010,
                    descricao: "Carro ta zero bala",
                    vendido: false,
                    created_at: knex.fn.now(),
                    updated_at: knex.fn.now()
                },
                {
                    veiculo: "Corsa",
                    marca: "GM",
                    ano: 2010,
                    descricao: "Carro ta zero bala",
                    vendido: false,
                    created_at: knex.fn.now(),
                    updated_at: knex.fn.now()
                },
                {
                    veiculo: "Corsa",
                    marca: "GM",
                    ano: 2010,
                    descricao: "Carro ta zero bala",
                    vendido: false,
                    created_at: knex.fn.now(),
                    updated_at: knex.fn.now()
                }
            ]);
        });
};