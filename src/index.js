import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './script/Home';
import AboutUs from './script/AboutUs';

ReactDOM.render(
    <Router>
        <div id="routeContainer">
            <Switch>
                <Route children={(props) => (
                    <App {...props}>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/aboutUs" component={AboutUs}/>
                        </Switch>
                    </App>
                )}/>
            </Switch>
        </div>
    </Router>,
    document.getElementById('root'));

