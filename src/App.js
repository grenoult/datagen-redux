import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { FORM_LOADED, FORM_LOADING, endLoadForm, startLoadForm } from './actions';
import { createStore } from 'redux';
// import Form from './components/Form';
import FormContainer from './containers/FormContainer';
import { Provider } from 'react-redux';
import datagenApp from './reducers/Datagenapp';

let store = createStore(
    datagenApp,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

console.log(store.getState());

const unsubscribe = store.subscribe(() =>
    console.log(store.getState())
);

store.dispatch(startLoadForm());
// store.dispatch(endLoadForm());

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
