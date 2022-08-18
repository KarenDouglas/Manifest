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
      type: String
    },
    snippet:{
        type: String,
        required: true
    },
    body:{
        type: String,
        required: true
    },
      featured: {
        type: Boolean,
    }
   
   
}, { timestamps: true});

// create model
const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;