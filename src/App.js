import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Link, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import MsgIndexView from './components/Message/IndexView';
class App extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">App RJS</a>
                        </div>
                        <ul className="nav navbar-nav">
                            <li><Link to="/" >Home Page</Link></li>
                            <li><Link to="/messages" >Messages</Link></li>
                        </ul>
                    </div>
                </nav>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/messages" component={MsgIndexView}/>
                </Switch>
            </div>

            /*<div>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h1 className="App-title">TD_ReactJS</h1>
                    </header>
                    <p className="App-intro">
                        To get started, edit <code>src/App.js</code> and save to reload.
                    </p>
                </div>
            </div>
            */
        );
    }
}

export default App;
