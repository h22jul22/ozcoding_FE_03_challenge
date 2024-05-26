export const oneSecondLateIncrement = () => {
    return function oneSecondLateIncrementThunk(dispatch) {
        setTimeout(() => {
            dispatch({
                type: 'INCREMENT',
            });
        }, 1000);
    };
};
