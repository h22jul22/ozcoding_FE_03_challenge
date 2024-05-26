export const oneSecondLateDecrement = () => {
    return function oneSecondLateDecrementThunk(dispatch) {
        setTimeout(() => {
            dispatch({
                type: 'DECREMENT',
            });
        }, 1000);
    };
};
