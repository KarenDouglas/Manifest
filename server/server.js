// .env  loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based
require('dotenv').config()
const blogRoutes = require('./routes/blog')

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

//listen for requests


app.listen(process.env.PORT, ()=> {
    console.log(`listening on port ${process.env.PORT}`)
})