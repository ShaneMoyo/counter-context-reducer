import React, { useContext } from 'react'; 
import { CountContext } from './CountContext';


export default function Count() { 

    const { count, dispatch } = useContext(CountContext)
    return (
        <>    
            <h1>Count: {count}</h1>
            <button onClick={()=>dispatch("ADD")}>Increment</button>
            <button onClick={()=>dispatch("SUBTRACT")}>Decrement</button>       
        </> 
    )
}