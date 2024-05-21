import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { formatNumberToWon } from '../utils';

const ExpenseTotal = () => {
    const { expenses } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    return (
        <div className='alert alert-info p-4'>
            <span>총 합계: {formatNumberToWon(totalExpenses)}</span>
        </div>
    );
};

export default ExpenseTotal;
