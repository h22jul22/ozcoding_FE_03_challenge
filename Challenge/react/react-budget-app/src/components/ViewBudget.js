import { formatNumberToWon } from '../utils';

const ViewBudget = ({ budget, setIsEditing }) => {
    return (
        <>
            <span>예산: {formatNumberToWon(budget)}</span>
            <button onClick={() => setIsEditing(true)} className='btn btn-primary'>
                수정
            </button>
        </>
    );
};

export default ViewBudget;
