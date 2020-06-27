import React, { createContext, useReducer } from 'react'; 

export const CountContext = createContext();

export default function CountContextProvider(props) {
    function countReducer(state, action) {
        console.log('state: ', state)
        switch(action) {
            case "ADD": 
                return state + 1; 
            case "SUBTRACT": 
                return state - 1; 
            default: 
                return state
        }
            
    }
    const [count, dispatch] = useReducer(countReducer, 0); 
    
    return (
        <CountContext.Provider value={{ count, dispatch }}>
            {props.children}
        </CountContext.Provider>
    )
}; 