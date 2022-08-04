// .env  loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based
require('dotenv').config()
const blogRoutes = require('./routes/blog')
const mongoose = require('mongoose')
const express = require('express')

const app = express();

//middle to recieve requests
app.use(express.json())

// middleware to log requests and path
app.use((req, res, next)=> {
 console.log(req.path, req.method)
 next();

})

// route handler
app.use('/api/blog',blogRoutes);

// connect to db
mongoose.connect(process.env.MONG_URI)
    .then(()=>{
        //listen for requests after Mongodb is connected
        app.listen(process.env.PORT, ()=> {
            console.log(` connected to db & listening on port ${process.env.PORT}`)
        })
    })
    .catch((err)=> {
        console.log(err)
    });

