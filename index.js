const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
require('./db/mongodb')
const apiRouter = require('./apis')

app.use(express.json())
app.use(cors())

 app.use('/api/v1', apiRouter)

app.get('/', (req,res)=>{
    res.send('Servidor vivo')
})

const PORT = process.env.PORT || 5001
app.listen(PORT, ()=>{
    console.log(`Servido conectado en ${PORT}`)
})