// Hover Help Reducer

const helpReducerDefaultState = {
    hoverHelp: 'enabled',
    test: 'should see this too'
};
const helpReducer = (state = helpReducerDefaultState, action) => {
    switch (action.type) {
        case 'ENABLE_HELP':
            return {
                ...state,
                hoverHelp: 'enabled'
            };
        case 'DISABLE_HELP':
            return {
                ...state,
                hoverHelp: 'disabled'
            };
        default:
            return state;
    }
};

export default helpReducer;