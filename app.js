require('dotenv').config()
const express = require('express')
const cors = require('cors')
const Router = require('./src/routes')
const port = process.env.PORT || 3000

//instanciando express e cors para requisicoes.
const app = express()
app.use(cors())


//Configuração para aceitar requisições Json e arquivo
app.use(express.json())
app.use(Router)


//inicando o servidor
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})
