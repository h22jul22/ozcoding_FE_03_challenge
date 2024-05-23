import { createContext, useReducer } from 'react';

export const AppContext = createContext();

export const AppReducer = (state, action) => {
    //state는 initialState임
    switch (action.type) {
        case 'ADD_EXPENSE':
            return {
                ...state,
                expenses: [...state.expenses, action.payload],
            };
        case 'DELETE_EXPENSE':
            return {
                ...state,
                expenses: state.expenses.filter((expense) => expense.id !== action.payload),
            };

        case 'SET_BUDGET':
            return {
                ...state,
                budget: action.payload,
            };

        case 'ADD_INCOME':
            return {
                ...state,
                incomes: [...state.incomes, action.payload],
            };

        case 'DELETE_INCOME':
            return {
                ...state,
                incomes: state.incomes.filter((income) => income.id !== action.payload),
            };
        default:
            return state;
    }
};

const initialState = {
    budget: 30000,
    expenses: [],
    incomes: [],
};

export const AppContextProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (
        <AppContext.Provider
            value={{
                incomes: state.incomes,
                expenses: state.expenses,
                budget: state.budget,
                dispatch,
            }}
            {...props}
        />
    );
};

// export const AppContextProvider = (props) => {
//     return (
//         <AppContext.Provider value={{}}>
//             {props.children}
//         </AppContext.Provider>
//     );
// };
