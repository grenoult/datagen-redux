import 'babel-polyfill'
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import datagenApp from './reducers/Datagenapp';
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { Switch, Route, Link, withRouter } from 'react-router-dom'
import HomeContainerComponent from "./containers/HomeContainer";
import HelpContainerComponent from "./containers/HelpContainer";
import AboutContainerComponent from "./containers/AboutContainer";

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
        return (
            <Provider store={store}>
                <div className="App container">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <Link className="navbar-brand" to='/'>Data Generator</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                {/*<a className="nav-item nav-link active" href="#">Home <span*/}
                                    {/*className="sr-only">(current)</span></a>*/}
                                <Link className="nav-item nav-link" to='/help'>Help</Link>
                                <Link className="nav-item nav-link" to='/about'>About</Link>
                            </div>
                        </div>
                    </nav>
                    {/*Routes are defined here*/}
                    <Switch>
                        <Route exact path='/' component={HomeContainerComponent}/>
                        <Route exact path='/help' component={HelpContainerComponent}/>
                        <Route exact path='/about' component={AboutContainerComponent}/>
                    </Switch>
                </div>
            </Provider>
        );
    }
}

export default App;
