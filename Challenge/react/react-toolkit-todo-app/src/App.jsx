import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addTodo, deleteTodo, editTodo, toggleTodo } from './store/todoSlice';

function App() {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    const [text, setText] = useState('');
    const [editId, setEditId] = useState(null);
    const [editText, setEditText] = useState('');
    const [filtered, setFiltered] = useState('all');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim() !== '') {
            dispatch(addTodo(text));
            setText('');
        }
    };

    const handleDelete = (id) => {
        dispatch(deleteTodo(id));
    };

    const handleEditStart = (id, text) => {
        setEditId(id);
        setEditText(text);
    };

    const handleEditSave = () => {
        if (editText.trim !== '') {
            dispatch(
                editTodo({
                    id: editId,
                    newText: editText,
                })
            );
            setEditId(null);
            setEditText('');
        }
    };

    // 필터링 기능 구현하기
    const filteredTodos = todos.filter((todo) => {
        switch (filtered) {
            case 'all':
                return true;
            case 'completed':
                return todo.completed;
            case 'active':
                return !todo.completed;
            default:
                return true;
        }
    });

    return (
        <>
            <div className='App'>
                <form onSubmit={handleSubmit} className='form'>
                    <select
                        value={filtered}
                        onChange={(e) => setFiltered(e.target.value)}
                        className='form__select'>
                        <option value='all'>all</option>
                        <option value='completed'>completed</option>
                        <option value='active'>active</option>
                    </select>
                    <input
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        className='form__input'
                        placeholder='todo...'
                    />
                    <button type='submit' className='form__button'>
                        Add Todo
                    </button>
                </form>

                <ul className='list__container'>
                    {filteredTodos.map((todo) => (
                        <li key={todo.id} className='list__wrapper'>
                            <input
                                type='checkbox'
                                checked={todo.completed}
                                onChange={() => dispatch(toggleTodo(todo.id))}
                                className='list__checkbox'
                            />
                            {todo.id === editId ? (
                                <>
                                    <input
                                        type='text'
                                        value={editText}
                                        onChange={(e) => setEditText(e.target.value)}
                                        className='list__input'
                                    />
                                    <button onClick={handleEditSave}>Save</button>
                                    <button onClick={() => setEditId(null)}>Cancel</button>
                                </>
                            ) : (
                                <>
                                    <span className='list__text'>{todo.text}</span>
                                    <button onClick={() => handleEditStart(todo.id, todo.text)}>
                                        Edit
                                    </button>
                                    <button onClick={() => handleDelete(todo.id)}>Delete</button>
                                </>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default App;
