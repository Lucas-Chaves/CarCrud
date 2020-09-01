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
                    descricao: "pimenta ipsum",
                    vendido: false,
                },
                {
                    veiculo: "Corsa",
                    marca: "GM",
                    ano: 2010,
                    descricao: "pimenta ipsum",
                    vendido: false,
                },
                {
                    veiculo: "Corsa",
                    marca: "GM",
                    ano: 2010,
                    descricao: "pimenta ipsum",
                    vendido: true,
                }
            ]);
        });
};