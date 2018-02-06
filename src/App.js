import 'babel-polyfill'
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import { getFormData } from './actions';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// import Form from './components/Form';
import FormContainer from './containers/FormContainer';
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

// store.dispatch(getFormData())
//     .then(() => console.log(store.getState()))
// ;

unsubscribe();

class App extends Component {
    render() {
        // let rows = [1,2,3];
        return (
            <Provider store={store}>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h1 className="App-title">Welcome to React</h1>
                    </header>
                    <p className="App-intro">
                        To get started, edit <code>src/App.js</code> and save to reload.
                    </p>
                    <FormContainer/>
                </div>
            </Provider>
        );
    }
}

export default App;
