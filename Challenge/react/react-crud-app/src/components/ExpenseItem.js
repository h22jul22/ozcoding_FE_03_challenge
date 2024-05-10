import React from 'react';
import './ExpenseItem.css';
import { VscEdit, VscTrash } from 'react-icons/vsc';

const ExpenseItem = ({ expense, handleDelete, handelEdit }) => {
    const deleteHandler = () => {
        handleDelete(expense.id);
    };

    const editHandler = () => {
        handelEdit(expense.id);
    };

    return (
        <li className='item'>
            <div className='info'>
                <span className='expense'>{expense.charge}</span>
                <span className='amount'>{expense.amount}</span>
            </div>
            <div>
                <button onClick={editHandler} className='edit-btn'>
                    <VscEdit />
                </button>
                <button onClick={deleteHandler} className='clear-btn'>
                    <VscTrash />
                </button>
            </div>
        </li>
    );
};

export default ExpenseItem;
