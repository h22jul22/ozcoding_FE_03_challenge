import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
    const [count, setCount] = useState(0);
    const [disabled, setDisabled] = useState(false);

    return (
        <div className='App'>
            <header className='App-header'>
                <h3 data-testid='counter'> {count} </h3>
                <div className='btn-wrapper'>
                    <button
                        data-testid='minus-button'
                        onClick={() => setCount((prev) => prev - 1)}
                        disabled={disabled}
                        className='btn'>
                        -
                    </button>
                    <button
                        data-testid='plus-button'
                        onClick={() => setCount((prev) => prev + 1)}
                        disabled={disabled}
                        className='btn'>
                        +
                    </button>
                </div>
                <div>
                    <button
                        onClick={() => setDisabled((prev) => !prev)}
                        style={{ backgroundColor: 'navy' }}
                        data-testid='on/off-button'
                        className='btn btn-onOff'>
                        on/off
                    </button>
                </div>
            </header>
        </div>
    );
}

export default App;
