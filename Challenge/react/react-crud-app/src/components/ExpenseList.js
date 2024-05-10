import React from 'react';
import './ExpenseList.css';
import ExpenseItem from './ExpenseItem';
import { VscTrash } from 'react-icons/vsc';

const ExpenseList = ({ initialExpenses, handleDelete, handelEdit, clearItems, expenses }) => {
    return (
        <>
            <ul className='list'>
                {initialExpenses.map((expense) => {
                    return (
                        <ExpenseItem
                            key={expense.id}
                            expense={expense}
                            handleDelete={handleDelete}
                            handelEdit={handelEdit}
                        />
                    );
                })}
            </ul>
            {expenses.length > 0 ? (
                <button onClick={clearItems} className='btn'>
                    목록 지우기
                    <VscTrash className='btn-icon' />
                </button>
            ) : null}
        </>
    );
};

export default ExpenseList;
