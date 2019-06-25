import { createStore, combineReducers } from 'redux';
import helpReducer from '../reducers/help';

export default () => {


    const store = createStore(
        combineReducers({
            help: helpReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
};
