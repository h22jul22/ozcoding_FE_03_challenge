import { useContext } from 'react';
import { formatNumberToWon } from '../utils';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
    const { expenses, budget } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';

    return (
        <div className={`alert ${alertType} p-4`}>
            <span>남은 돈: {formatNumberToWon(budget - totalExpenses)}</span>
        </div>
    );
};

export default Remaining;
