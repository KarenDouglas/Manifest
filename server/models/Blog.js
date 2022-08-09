const mongoose = require('mongoose');

// create schema using mongoose
const { Schema } = mongoose;

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String
    },
    img:{
        data: Buffer,
        contentType: String
    },
    body:{
        type: String,
        required: true
    }
   
}, { timestamps: true});

// create model
const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;