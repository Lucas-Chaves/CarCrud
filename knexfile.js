require('dotenv').config()



module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host: process.env.HOST_DB_DEV,
      port: process.env.PORT_DB_DEV,
      user: process.env.USER_DB,
      password: process.env.PASSWORD_DB,
      database: process.env.DATABASE_DEV,
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