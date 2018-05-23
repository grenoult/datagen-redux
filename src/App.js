import 'babel-polyfill'
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import FormContainer from './containers/FormContainer';
import ResultContainer from './containers/ResultContainer';
import { Provider } from 'react-redux';
import datagenApp from './reducers/Datagenapp';
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

const loggerMiddleware = createLogger();

let store = createStore(
    datagenApp,
    composeWithDevTools(
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware
        )
    )
);

const unsubscribe = store.subscribe(() =>
    console.log(store.getState())
);

unsubscribe();

class App extends Component {
    render() {
        // let rows = [1,2,3];
        return (
            <Provider store={store}>
                <div className="App container">
                    <h1>Random Data</h1>
                    <FormContainer/>
                    <ResultContainer/>
                </div>
            </Provider>
        );
    }
}

export default App;
