// .env  loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
require('dotenv').config();

//routes
const blogRoutes = require('./routes/blog');




const app = express();
app.use(cors())


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
mongoose.connect(process.env.MONG_URI, {
    useNewUrlParser: true
})
    .then(()=>{
        //listen for requests after Mongodb is connected
        app.listen(process.env.PORT, ()=> {
            console.log(` connected to db & listening on port ${process.env.PORT}`)
        })
    })
    .catch((err)=> {
        console.log(err)
    });

