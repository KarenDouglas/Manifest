import React, { useState, useEffect } from "react";


//components
import BlogForm from "../components/BlogForm";


// function to render Home Page
const AddBlog = () => {
 

    return (
        <div className="add-blog bg-darkp">
            <div className="content">
                <h1 className="content-title text-beige container font-cursive-bold"> Add Blog</h1>
                <div className="" >
                    <BlogForm/>
                </div>
            </div>
        </div>
       
    )
}


export default AddBlog;