import { useContext } from 'react';
import { formatNumberToWon } from '../utils';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
    const { expenses, incomes } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const totalIncomeCost = incomes.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const alertType = totalExpenses > totalIncomeCost ? 'alert-danger' : 'alert-success';

    return (
        <div className={`alert ${alertType} p-4`}>
            <span>남은 돈: {formatNumberToWon(totalIncomeCost - totalExpenses)}</span>
        </div>
    );
};

export default Remaining;
