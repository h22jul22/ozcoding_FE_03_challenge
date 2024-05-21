import { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const AddExpenseForm = () => {
    const [name, setName] = useState('');
    const [cost, setCost] = useState(0);

    const { dispatch } = useContext(AppContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        const expense = {
            id: crypto.randomUUID(),
            name,
            cost,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense,
        });

        setName('');
        setCost(0);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className='row'>
                <div className='col-lg-6'>
                    <label>지출</label>
                    <input
                        type='text'
                        className='form-control'
                        id='name'
                        required='required'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className='col-lg-6'>
                    <label>비용</label>
                    <input
                        type='number'
                        className='form-control'
                        id='cost'
                        required='required'
                        value={cost}
                        onChange={(e) => setCost(e.target.valueAsNumber)}
                    />
                </div>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <button type='submit' className='btn btn-primary'>
                            추가
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default AddExpenseForm;
