const trackReducerDefaultState = [];
const trackReducer = (state = trackReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_TRACK':
            return [
                ...state,
                action.track
            ];
        case 'EDIT_TRACK':
            return state.map((track) => {
                if (track.id === action.id) {
                    return {
                        ...track,
                        ...action.update
                    };
                } else {
                    return track;
                };
            });
        default:
            return state;
    }
}

export default trackReducer;