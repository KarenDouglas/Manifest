import React, {createContext, useReducer } from "react";

export const BlogsContext = createContext()

// the children props reps whatever components the BlogsContextProvider wraps around (app component)

export const blogsReducer = (state, action) => {
    switch (action.type){
        case 'SET_BLOGS':
            return {
                // the payload is an array of all of the workouts
                blogs: action.payload
            }
        case 'CREATE_BLOG':
            return {
                // the payload is an array with one new post added to the array spread
                
                blog: [action.payload, state.blogs]
            }
            case 'DELETE_BLOG':
                return {
                    //filters out the deleted object
                    blogs: state.blogs.filter((b)=> b._id !== action.payload._id)
                }
        default:
            return state;
    }  
}


export const BlogsContextProvider = ({children}) => {
 const [state, dispatch] = useReducer(blogsReducer, {
        blogs: null
    });
    
 
    return (

        <BlogsContext.Provider value={{...state, dispatch}}>
            {children}
        </BlogsContext.Provider>
    )
}