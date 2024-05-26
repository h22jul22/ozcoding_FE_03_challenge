import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todos',
    initialState: JSON.parse(localStorage.getItem('userTodo')) || [],
    reducers: {
        addTodo: (state, action) => {
            state.push({
                id: Date.now(),
                text: action.payload,
                completed: false,
            });
            localStorage.setItem('userTodo', JSON.stringify(state));
        },
        deleteTodo: (state, action) => {
            const updateState = state.filter((todo) => todo.id !== action.payload);
            localStorage.setItem('userTodo', JSON.stringify(updateState));
            return updateState;
        },
        toggleTodo: (state, action) => {
            const todo = state.find((todo) => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
                localStorage.setItem('userTodo', JSON.stringify(state));
            }
        },
        editTodo: (state, action) => {
            const { id, newText } = action.payload;
            const todo = state.find((todo) => todo.id === id);
            if (todo) {
                todo.text = newText;
                localStorage.setItem('userTodo', JSON.stringify(state));
            }
        },
    },
});

export const { addTodo, deleteTodo, toggleTodo, editTodo } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
