import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { formatNumberToWon } from '../utils';

const IncomeTotal = () => {
    const { incomes } = useContext(AppContext);

    const totalIncomeCost = incomes.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    return (
        <div className='alert alert-primary p-4'>
            <span>총 수입: {formatNumberToWon(totalIncomeCost)} </span>
        </div>
    );
};

export default IncomeTotal;
