import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const AddIncomeForm = () => {
    const [name, setName] = useState('');
    const [cost, setCost] = useState(0);

    const { dispatch } = useContext(AppContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        const income = {
            id: crypto.randomUUID(),
            name,
            cost,
        };

        dispatch({
            type: 'ADD_INCOME',
            payload: income,
        });

        setName('');
        setCost(0);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className='row'>
                <div className='col-lg-4'>
                    <label>수입</label>
                    <input
                        type='text'
                        className='form-control'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className='col-lg-4'>
                    <label>금액</label>
                    <input
                        type='number'
                        className='form-control'
                        value={cost}
                        onChange={(e) => setCost(e.target.value)}
                    />
                </div>
                <div className='col-sm align-self-end'>
                    <button type='submit' className='btn btn-dark'>
                        추가
                    </button>
                </div>
            </div>
        </form>
    );
};

export default AddIncomeForm;
