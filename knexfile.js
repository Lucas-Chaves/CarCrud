// Update with your config settings.



module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host: "172.17.0.1",
      port: '4000',
      user: "root",
      password: "root",
      database: "oncar",
      charset: 'utf8'
    },
    migrations: {
      directory: __dirname + '/knex/migrations'
    },
    seeds: {
      directory: __dirname + '/knex/seeds',
    }
  }
};