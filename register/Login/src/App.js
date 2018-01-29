import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './Register.css';
import Registration from './Registration'
import { BrowserRouter } from 'react-router-dom'
import { Switch, Route } from 'react-router'
import Home from './Home'

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <BrowserRouter>
          <div>
            <Switch>
              <Route exact path="/" component= {Registration} />
            <Route exact path="/Home" component= {Home} />
            </Switch>
          </div>

        </BrowserRouter>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
