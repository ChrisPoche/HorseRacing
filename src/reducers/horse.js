const horseReducerDefaultState = [];
const horseReducer = (state = horseReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_HORSE':
            return [
                ...state,
                action.horse
            ];
        case 'REMOVE_HORSE':
            return state.filter(({ id }) => id !== action.id );
        case 'EDIT_HORSE':
            return state.map((horse) => {
                if (horse.id === action.id) {
                    return {
                        ...horse,
                        ...action.update
                    };
                } else {
                    return horse;
                };
            });
        default:
            return state;
    };
};

export default horseReducer;