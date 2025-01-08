// create post context here
import {createContext, useState, useContext} from 'react';

const PostContext = createContext();


// Create custom hook that returns context value here
export const useValue = () => {
    const value = useContext(PostContext);
    return value;
}

// create a custom saved post provider here with add and reset functions

export function PostContextProvider({ children }) {
    const [savedPosts, setSavedPosts] = useState([]); 
    const [count, setCount] = useState(0);
    const [showSavedList, setShowSavedList] = useState(false);


    const addPost = (post) => {
        setSavedPosts([...savedPosts, post])
        setCount(count + 1);
    }
    const reset =()=>{
        setSavedPosts([]);
        setCount(0);
    }
    const toggle = ()=>{
        setShowSavedList(!showSavedList);
    }

    return (
        <PostContext.Provider 
        value={{ 
            showSavedList,
            savedPosts, 
            count,  
            addPost,
            reset, 
            toggle
             }}>
            {children}
        </PostContext.Provider>

    ) 
}
