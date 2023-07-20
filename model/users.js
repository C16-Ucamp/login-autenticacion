const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const uniqueValidator = require('mongoose-unique-validator')
const {Schema, model} = mongoose

const userSchema = new Schema({
    name: {
        type: String, 
        require: true
    },
    lastname: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require:true
    },
    role: {
        type: String
    }
},{
    versionKey: false,
    timestamps: true
})

userSchema.plugin(uniqueValidator, {message: 'El email ya existe'})


userSchema.pre('save', function(next){
    console.log('--------->', this.email, this.password)
    const hashedPassword = bcrypt.hashSync(this.password,12)
    this.password = hashedPassword
    next()
})


const userModel = model('usuarios', userSchema)
module.exports = userModel
