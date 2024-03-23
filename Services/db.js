const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/Library')

const book = mongoose.model('book',{
    id:String,
    title:String,
    price:String
})

module.exports={
    book
}
