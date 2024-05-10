import React from 'react';
import './ExpenseForm.css';
import { VscSend } from 'react-icons/vsc';

const ExpenseForm = ({ charge, handleCharge, amount, handleAmount, handleSubmit, edit }) => {
    return (
        <form>
            <div className='form-center'>
                <div className='form-group'>
                    <label htmlFor='charge'>상품</label>
                    <input
                        value={charge}
                        onChange={handleCharge}
                        type='text'
                        className='form-control'
                        id='charge'
                        name='charge'
                        placeholder='예) 콜라'
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='amount'>비용</label>
                    <input
                        value={amount}
                        onChange={handleAmount}
                        type='number'
                        className='form-control'
                        id='amount'
                        name='amount'
                        placeholder='예) 100'
                    />
                </div>
            </div>
            <button onClick={handleSubmit} type='submit' className='btn'>
                {edit ? '수정' : '제출'}
                <VscSend className='btn-icon' />
            </button>
        </form>
    );
};

export default ExpenseForm;
