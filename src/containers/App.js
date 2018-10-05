import React, { Component } from 'react';
import {
 BrowserRouter, Switch, Route, Redirect 
} from 'react-router-dom';
import Home from '../components/Home.js';
import LogIn from '../components/LogIn.js';
import LogUp from '../components/LogUp.js';

class App extends Component {
  render() {
    return (
      <div>
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route
                            path="/"
                            exact
                            component={Home}
                            />
                        <Route
                            path="/LogIn"
                            exact
                            component={LogIn}
                            />
                        <Route
                            path="/LogUp"
                            exact
                            component={LogUp}
                            />
                      </Switch>
                  </div>
              </BrowserRouter>
          </div>
    );
  }
}
export default App;
