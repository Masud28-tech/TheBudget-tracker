import {createContext, useReducer} from 'react';
import contextReducer from './contextReducer';

const initialValues = JSON.parse(localStorage.getItem('transactions')) || [];

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

    const totalBalance = transactions.reduce((acc, currVal) => currVal.type === 'Expense' ? acc -= currVal.amount : acc += currVal.amount, 0)

    return (
        <TransactionsContext.Provider value={{transactions, addTransaction, deleteTransaction, totalBalance}}>
            {children}
        </TransactionsContext.Provider>
    );
} 