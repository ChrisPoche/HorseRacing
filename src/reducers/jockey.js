const jockeyReducerDefaultState = [];
const jockeyReducer = (state = jockeyReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_JOCKEY':
            return [
                ...state,
                action.jockey
            ];
        case 'REMOVE_JOCKEY':
            return state.filter(({ id }) => action.id !== id);
        case 'EDIT_JOCKEY':
            return state.map((jockey) => {
                if (jockey.id === action.id) {
                    return {
                        ...jockey,
                        ...action.update
                    };
                } else {
                    return jockey;
                };
            });
        default:
            return state;
    }
}

export default jockeyReducer;