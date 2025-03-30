import express from 'express'
import axios from 'axios'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
dotenv.config()
const port = process.env.PORT
const app=express()
const apiKey = process.env.apikey;
app.use(bodyParser.urlencoded({extended:true}))

app.get('/book',async(req,res)=>{
    try{
const bookName=req.query.book
        const book= await axios.get('https://www.googleapis.com/books/v1/volumes?q=' + bookName + '&key=' + apiKey)
       if(book.data.totalItems==0){
        res.send("No Books Found.Try Different Keyword")
       }else{

           res.send(book.data)
       }

    }catch(err){
        console.log(err)
        res.status(500).json({ error: "Failed to fetch books" });
    }
})
app.get('/categories',async(req,res)=>{
    try{

        const book= await axios.get('https://www.googleapis.com/books/v1/volumes?q=' +'' +'+subject:'+req.query.category+ '&key=' + apiKey)
        if(book.data.totalItems==0){
            res.send("No Books Found.Try Different Keyword")
           }else{
    
               res.send(book.data)
           }
    }catch(err){
        console.log(err)
        res.status(500).json({ error: "Failed to fetch books" });
    }
})
app.get('/author',async(req,res)=>{
    try{

        const book= await axios.get('https://www.googleapis.com/books/v1/volumes?q=' +'' +'+inauthor:'+req.query.author+ '&key=' + apiKey)
        if(book.data.totalItems==0){
            res.send("No Books Found.Try Different Keyword")
           }else{
    
               res.send(book.data)
           }
    }catch(err){
        console.log(err)
        res.status(500).json({ error: "Failed to fetch books" });
    }
})
app.get('/publisher',async(req,res)=>{
    try{

        const book= await axios.get('https://www.googleapis.com/books/v1/volumes?q=' +'' +'+inpublisher:'+req.query.publisher+ '&key=' + apiKey)
        if(book.data.totalItems==0){
            res.send("No Books Found.Try Different Keyword")
           }else{
    
               res.send(book.data)
           }
    }catch(err){
        console.log(err)
        res.status(500).json({ error: "Failed to fetch books" });
    }
})


app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`)
})