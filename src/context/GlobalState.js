import React, { createContext, useReducer } from 'react'
import AppReducer from "./AppReducer";

//intial State 
const initialState = {
    transactions: [

    ]

}

//Create Context 

export const GlobalContext = createContext(initialState);

//Provider
export const GlobalProvidor = ({ children }) => {


    const [state, disptach] = useReducer(AppReducer, initialState);


    //Actions

    function deleteTransactoin(id) {
        disptach({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }


    function addTransactoin(transaction) {
        disptach({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    return <GlobalContext.Provider value={
        {
            transactions: state.transactions,
            deleteTransactoin,
            addTransactoin
        }
    } >
        {children}
    </GlobalContext.Provider>

}



