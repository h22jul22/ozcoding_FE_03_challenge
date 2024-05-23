import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';
import IncomeItem from './IncomeItem';

const IncomeList = () => {
    const { incomes } = useContext(AppContext);
    const [filteredIncomes, setFilteredIncomes] = useState(incomes || []);

    useEffect(() => {
        setFilteredIncomes(incomes);
    }, [incomes]);

    const handleChange = (e) => {
        const searchIncome = incomes.filter((income) => income.name.includes(e.target.value));

        setFilteredIncomes(searchIncome);
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
                {filteredIncomes.map((income) => (
                    <IncomeItem
                        key={income.id}
                        id={income.id}
                        name={income.name}
                        cost={income.cost}
                    />
                ))}
            </ul>
        </>
    );
};

export default IncomeList;
