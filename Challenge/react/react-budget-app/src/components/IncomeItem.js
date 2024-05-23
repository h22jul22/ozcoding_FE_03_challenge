import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
import { formatNumberToWon } from '../utils/index';

const IncomeItem = ({ id, name, cost }) => {
    const { dispatch } = useContext(AppContext);

    const handleDelete = (e) => {
        dispatch({
            type: 'DELETE_INCOME',
            payload: id,
        });
    };

    return (
        <li className='list-group-item d-flex justify-content-between align-items-center'>
            {name}
            <div>
                <span className='badge bg-info me-3'> {formatNumberToWon(cost)} </span>
                <TiDelete onClick={handleDelete} size={'1.5rem '} />
            </div>
        </li>
    );
};

export default IncomeItem;
