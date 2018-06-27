import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Switch, Route,Router,Link } from 'react-router-dom';
//import { ConnectedRouter } from 'react-router-redux';

import './index.css';
import App from './App';
import Home from './components/Home';
import registerServiceWorker from './registerServiceWorker';

import { store, history } from './redux/store';
console.log("Provider: "+"\n");
console.log(Provider);
console.log("ConnectedRouter: "+"\n");
//console.log(ConnectedRouter);
ReactDOM.render((
    <div>
        <Provider store={store}>
            <Router history={history}>
                <Switch>
                    <Route path="/" component={App}/>
                </Switch>
            </Router>
        </Provider>
    </div>

), document.getElementById('root'));
//registerServiceWorker();

/*// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import App from './App.js';
import registerServiceWorker from './registerServiceWorker';

import { store, history } from './redux/store';
ReactDOM.render((
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>
                <Route path="/" component={App}/>
            </Switch>
        </ConnectedRouter>
    </Provider>
), document.getElementById('root'));
registerServiceWorker();*/