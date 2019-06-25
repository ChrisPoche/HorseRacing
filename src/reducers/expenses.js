// Expenses Reducer

const expensesReducerDefaultState = [];
const expensesReducer = ( state = expensesReducerDefaultState, action ) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => action.id !== id); // destructure expense array by just calling id (({ id })
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if(expense.id === action.id){
                    return {
                        ...expense, // Inside of map() hence why it's state
                        ...action.update
                    };
                } else {
                    return expense;
                };
            });
        default:
            return state;
    }
};

export default expensesReducer;