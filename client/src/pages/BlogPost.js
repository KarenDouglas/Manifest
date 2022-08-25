import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useBlogsContext } from "../hooks/useBlogsContext";



const BlogPost = ()=> {
    
    let { id } = useParams();

const {dispatch} = useBlogsContext()
const [blog, setBlog] = useState({});
    

   const fetchBlogData = async() => {

        
        const response = await fetch(`https://manifest-backend.herokuapp.com/api/blog/${id} `);

        const json = await response.json()
        // check if response is successful
        if(response.ok){
            await dispatch({type: 'SET_BLOG_POST', payload: json})
            setBlog(json)
        }
        
      
    }

 
  

    
useEffect(() => {
        fetchBlogData();
     // the [] ensures that this useeffect function is only call once when it first fires   
    }, []);

    return(

        <div className="home bg-darkp">
            <div className="content">
                <h1 className="content-title text-beige container font-cursive-bold">{blog.title}</h1>
                <div className='container flow'>
                <em className='text-accent-green'>Written by: {blog.author}</em>
                    <p className='text-beige font-serif-regular'>{blog.body}</p>
                    <br/>
                    <br/>
                    <em className='text-accent-peach'>{blog.createdAt}</em>
                </div>
            </div>
        </div>
   
       
    )

}

export default BlogPost;