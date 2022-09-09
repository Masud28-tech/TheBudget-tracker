import {createContext, useReducer} from 'react';
import contextReducer from './contextReducer';

const initialValues = [];

export const TransactionsContext = createContext(initialValues);

export const TransactionsProvider = ({children}) => {
    const [transactions, dispatch] = useReducer(contextReducer, initialValues);

    //ACTION CREATORS
    const addTransaction = (transaction) => {
        dispatch({type: "ADD_TRANSACTION", payload: transaction});
    }
    const deleteTransaction = (id) => {
        dispatch({type: "DELETE_TRANSACTION", payload:id});
    }

    return (
        <TransactionsContext.Provider value={{transactions, addTransaction, deleteTransaction}}>
            {children}
        </TransactionsContext.Provider>
    );
}