import React from 'react';
import ReactDOM from 'react-dom';
// import {loadFromLocalStorage , saveToLocalStorage  } from "./redux/reduser"

import {createStore } from "redux"
import {Provider} from "react-redux"
// import thunkMiddleware from 'redux-thunk'
import { BrowserRouter } from "react-router-dom";


import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import reduser from "./redux/reduser"

// import futching from "./redux/actionCreacter"

function saveToLocalStorage(state) {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem("persistantState", serialisedState);
  } catch (e) {
    console.warn(e);
  }
}

function loadFromLocalStorage() {
  try {
    const serialisedState = localStorage.getItem("persistantState");
    if (serialisedState === null) return undefined;
    return JSON.parse(serialisedState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}

const store = createStore(reduser, loadFromLocalStorage())
// const store = createStore(reduser, applyMiddleware(thunkMiddleware))
// store.dispatch(futching())

store.subscribe(() => saveToLocalStorage(store.getState()));

ReactDOM.render(
  <BrowserRouter >
    <Provider store={store} >
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </BrowserRouter>
  
  ,
  document.getElementById('root')
);


reportWebVitals();
