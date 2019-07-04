import { createStore, combineReducers } from 'redux';
import helpReducer from '../reducers/help';
import horseReducer from '../reducers/horse';

export default () => {


    const store = createStore(
        combineReducers({
            help: helpReducer,
            horse: horseReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
};
