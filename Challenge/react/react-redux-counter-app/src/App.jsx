import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { oneSecondLateIncrement } from './actions/plusCount';
import { oneSecondLateDecrement } from './actions/minusCount';

function App() {
    const counter = useSelector((state) => state);
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch({
            type: 'INCREMENT',
        });
    };

    const handleDecrement = () => {
        dispatch({
            type: 'DECREMENT',
        });
    };

    const handleLateIncrement = () => {
        dispatch(oneSecondLateIncrement());
    };

    const handleLateDecrement = () => {
        dispatch(oneSecondLateDecrement());
    };

    return (
        <>
            <div style={{ fontSize: '5rem' }}> {counter} </div>
            <button onClick={handleIncrement}>+1</button>
            <button onClick={handleDecrement}>-1</button>
            <br />
            <br />
            <button onClick={handleLateIncrement}>1초 후 +1</button>
            <button onClick={handleLateDecrement}>1초 후 -1</button>
        </>
    );
}

export default App;
