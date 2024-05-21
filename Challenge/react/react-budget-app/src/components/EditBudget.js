import React, { useState } from 'react';

const EditBudget = ({ budget, setIsEditing, dispatch }) => {
    const [value, setValue] = useState(budget);

    const handleSaveClick = (value) => {
        dispatch({
            type: 'SET_BUDGET',
            payload: value,
        });

        setIsEditing(false);
    };

    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            handleSaveClick(value);
        }
    };

    return (
        <>
            <input
                type='number'
                className='form-control me-3'
                id='name'
                required='required'
                value={value}
                onChange={(e) => setValue(e.target.valueAsNumber)}
                onKeyUp={handleEnter}
            />
            <button
                className='btn btn-primary'
                style={{ minWidth: 55 }}
                onClick={() => handleSaveClick(value)}>
                수정
            </button>
        </>
    );
};

export default EditBudget;
