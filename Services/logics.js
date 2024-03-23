const db = require('../Services/db')

//get
const getAllBooks = () => {
    return db.book.find().then((result) => {
        if (result) {
            return {
                statusCode: 200,
                books: result
            }
        }
        else {
            return {
                statusCode: 404,
                message: 'cant find books'
            }
        }
    })
}

//add
const addBook = (id, title, price) => {
    return db.book.findOne({ id }).then((result) => {
        if (result) {
            return {
                statusCode: 404,
                message: "Book already exists"
            }
        }

        else {
            const newBook = new db.book({ id, title, price })
            
            newBook.save()
            return {
                statusCode: 200,
                message: "Added successfully"
            }

        }
    })
}

//Delete
const deleteBook = (id) => {
    return db.book.deleteOne({ id }).then((result) => {
            return {
                statusCode: 200,
                message: "Deleted successfully"
            }
        }
    )
        .catch((error) => {
            return {
                statusCode: 401,
                message: "Couldn't find"
            }
        })
}

//Get book to edit
const getABook=(id)=>{
    return db.book.findOne({id}).then((result)=>{
        if(result){
            return{
                statusCode:200,
                books:result
            }
        }
        else{
            return{
                statusCode:404,
                message:"Couldn't find"
            }
        }
    })
}


//update 
const updateABook=(id,title,price)=>{
    return db.book.findOne({id}).then((result)=>{
        if(result){
            result.id = id;
            result.title = title;
            result.price = price;

            //save 
            result.save()
             
            return{
                statusCode:200,
                message:"Updated successfully"
            }
        }
        else{
            return{
                statusCode:404,
                message:"Couldn't find"
            }
        }
    })
}


module.exports = {
    getAllBooks,
    addBook,
    deleteBook,
    getABook,
    updateABook
}