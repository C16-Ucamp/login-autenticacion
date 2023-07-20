const moongose = require('mongoose')
const {Schema,model} = moongose

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    }
},{
    versionKey: false,
    timestamps:true
})

const ProductModel = model('products', productSchema)

module.exports = ProductModel