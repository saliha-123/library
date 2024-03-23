const express = require('express');

const cors = require('cors');

const logic = require('./Services/logics')

const libServer = express();


libServer.use(cors({
    origin : 'http://localhost:3000'
}))

libServer.use(express.json())



libServer.listen(8000,()=>{
    console.log('listening on port 8000');
})

// libServer.get("/",(req,res)=>{
//     res.send('<h1>Library</h1>')
// })

//API call for get all books details


libServer.get('/get-all-books',(req,res)=>{
    logic.getAllBooks().then((response)=>{
       res.status(response.statusCode).json(response);
    })
  })

  //add 
 libServer.post('/add-book',(req,res)=>{
    logic.addBook(req.body.id,req.body.title,req.body.price).then((response)=>{
       res.status(response.statusCode).json(response);
    })
  })

  //delete 
 libServer.delete('/delete-book/:id',(req,res)=>{
    logic.deleteBook(req.params.id).then((response)=>{
       res.status(response.statusCode).json(response);
    })
  })
 
  //get a book
  libServer.get('/get-a-book/:id',(req,res)=>{
    logic.getABook(req.params.id).then((response)=>{
       res.status(response.statusCode).json(response);
    })
  })
 
 
  //update
  libServer.post('/update-a-book/:id',(req,res)=>{
    logic.updateABook(req.params.id,req.body.title,req.body.price).then((response)=>{
       res.status(response.statusCode).json(response);
    })
  })
 