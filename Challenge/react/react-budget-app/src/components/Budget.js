import { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import EditBudget from './EditBudget';
import ViewBudget from './ViewBudget';

const Budget = () => {
    const { budget, dispatch } = useContext(AppContext);

    const [isEditing, setIsEditing] = useState(false);

    return (
        <div className='alert alert-primary p-3 d-flex justify-content-between align-items-center'>
            {isEditing ? (
                <EditBudget budget={budget} setIsEditing={setIsEditing} dispatch={dispatch} />
            ) : (
                <ViewBudget budget={budget} setIsEditing={setIsEditing} />
            )}
        </div>
    );
};

export default Budget;
