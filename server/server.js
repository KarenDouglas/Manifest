// .env  loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based
require('dotenv').config()

const express = require('express')

const app = express();

// middleware to log requests
app.use((req, res, next)=> {
 console.log(req.path, req.method)
 next();

})

// route handler
app.get('/', (req, res) => {
    res.json({ mssg: 'welcome to the app'})
})


//listen for requests


app.listen(process.env.PORT, ()=> {
    console.log(`listening on port ${process.env.PORT}`)
})