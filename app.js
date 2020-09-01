require('dotenv').config()
const express = require('express')
const cors = require('cors')
const userRouter = require('./src/routes')
const port = process.env.PORT


const knex = require('./knex/knex.js');

//instanciando express e cors para requisicoes.
const app = express()
app.use(cors())


//Configuração para aceitar requisições Json e arquivo
app.use(express.json())
app.use(userRouter)


app.get('/', (request, response) => {
    response.send('We Did it')
})


//inicando o servidor
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})
