const mongoose = require('mongoose')

const url = `mongodb+srv://${process.env.USER_MONGO}:${process.env.USER_PASSWORD}@cluster0.qctsqp4.mongodb.net/`

mongoose.connect(url)
.then(()=>{
    console.log('Base de datos de MongoDb conectada')
})
.catch((error)=>{
    console.log(error)
})

module.exports = mongoose