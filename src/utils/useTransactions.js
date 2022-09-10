import {useContext} from 'react';
import {TransactionsContext} from '../context/transactionsContext';
import {incomeCategories, expenseCategories, resetCategories} from '../constants/categories';

const useTransactions = (title) => {
    resetCategories();
    const {transactions} = useContext(TransactionsContext);
    const transactionsPerType = transactions.filter((transaction) => transaction.type === title);
    const categories = title === "Income" ? incomeCategories : expenseCategories;
    const total = transactionsPerType.reduce((acc, currVal) => acc += currVal.amount, 0);

    transactionsPerType.forEach((transaction) => {
        const category = categories.find((c) => c.type === transaction.category)
        if(category) category.amount += transaction.amount;
    });

    const filteredCategories = categories.filter((c) => c.amount > 0);

    const chartData = {
        datasets: [{
            data: filteredCategories.map((c) => c.amount),
            backgroundColor: filteredCategories.map((c) => c.color),
        }],
        labels : filteredCategories.map((c) => c.type),
    }

    return {chartData, total};
};

export default useTransactions;
