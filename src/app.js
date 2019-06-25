import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import Horse from './components/Horse';
import './styles/styles.scss';


const store = configureStore();
const state = store.getState();
console.log(state);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

const jsx2 = (
  <div>
    <h1>Welcome to the Horse Track</h1>
    <Horse />
    <Horse />
    <Horse />
    <Horse />
    <Horse />
    <Horse />
    <Horse />
    <Horse />
    <Horse />
    <Horse />
    <Horse />
    <Horse />
    <Horse />
    <Horse />
    <Horse />
    <Horse />
    <Horse />
    <Horse />
    <Horse />
    <Horse />
    <Horse />
    <Horse />
    <Horse />
  </div>
);



ReactDOM.render(jsx, document.getElementById('app'));
