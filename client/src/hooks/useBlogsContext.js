import { BlogsContext } from "../context/BlogContext";
import { useContext } from "react";

export const useBlogsContext = () => {

    // this passes in the value to the Provide
    const context = useContext(BlogsContext)
    // checks if context are being used in the tree
    if(!context){
        throw Error('useBlogsContext must be used inside a BlogsContextProvider')
    }    
    return context
}