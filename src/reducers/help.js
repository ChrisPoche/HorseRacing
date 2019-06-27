// Hover Help Reducer

const helpReducerDefaultState = {
    hoverHelp: 'enabled',
    modal: false,
    helpType: false,
    
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
        case 'OPEN_MODAL':
            return {
                ...state,
                helpType: action.helpType,
                modal: true
            };
        case 'CLOSE_MODAL':
            return {
                ...state,
                modal: false
            };
        default:
            return state;
    }
};

export default helpReducer;