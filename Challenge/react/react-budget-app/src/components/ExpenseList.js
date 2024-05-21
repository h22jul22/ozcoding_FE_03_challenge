import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';
import ExpenseItem from './ExpenseItem';

const ExpenseList = () => {
    const { expenses } = useContext(AppContext);
    const [filteredExpenses, setFilteredExpenses] = useState(expenses || []);

    useEffect(() => {
        setFilteredExpenses(expenses);
    }, [expenses]);

    const handleChange = (e) => {
        const searchResult = expenses.filter((expense) =>
            expense.name.toLowerCase().includes(e.target.value)
        );
        setFilteredExpenses(searchResult);
    };

    return (
        <>
            <input
                type='text'
                className='form-control mt-2'
                placeholder='검색하기...'
                onChange={handleChange}
            />

            <ul className='list-group mt-3 mb-3'>
                {filteredExpenses.map((expense) => (
                    <ExpenseItem
                        key={expense.id}
                        id={expense.id}
                        name={expense.name}
                        cost={expense.cost}
                    />
                ))}
            </ul>
        </>
    );
};

export default ExpenseList;
