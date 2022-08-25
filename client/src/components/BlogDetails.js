import React from "react";
import {useBlogsContext} from '../hooks/useBlogsContext'

// date fnx
import formatDistanceToNow from 'date-fns/formatDistanceToNow'




const BlogDetails = ({blog}) => {
    const { dispatch } = useBlogsContext();

   const handleClick = async() => {
    const response = await fetch("https://manifest-backend.herokuapp.com/api/blog" +blog._id, {
        method: 'DELETE'
    });
    const json = await response.json();
    if(response.ok){
        dispatch({type: 'DELETE_BLOG', payload: json})
        
    }
   }

    return(
            <div className="blog-details container flex-row">
            <div className=" bg-darkp container">
            <img src={require('../journal.jpg')} alt="" />
            <h2 className="blog-title text-beige font-cursive-bold">{blog.title}</h2>
            <p className="text-accent-green font-serif-light"><em>{blog.author}</em></p>
            </div>
            
            <div className="bg-darkp container snippet">
            <p className="text-beige ">{blog.snippet}</p>
            <p className="text-accent-peach font-serif-light">{formatDistanceToNow(new Date(blog.createdAt), {addSuffix: true})}</p>
            </div>
            <div className="flex-column">
            <button className="text-beige bg-accent-green"><a href={`/blog/${blog._id}`}>read more
                    
                    </a></button>
                    <span onClick={handleClick}><i class="fa-solid fa-trash fa-2xl text-accent-peach"></i></span>
            </div>
           
         
        </div>
        
        
    )
}

export default BlogDetails;