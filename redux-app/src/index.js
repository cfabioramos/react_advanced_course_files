import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'
import appReducers from './reducers'
import { Provider } from 'react-redux'

/* 
Concepts you need to attain for Redux:
i. store: the globalized state. createStore creates
ii. action: a simple function that returns an object which describes the action
iii. dispatch: the way we can execute the action
iv. reducer: based on the action it changes the store 
*/

const store = createStore(
    appReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
// Provider connects our global store with the application
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
