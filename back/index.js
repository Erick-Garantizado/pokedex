const express = require('express')
const router = require('./routes')
const app = express()
const porta = process.env.PORT
const cors = require('cors')


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))

app.use('/', router)

app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`)
})