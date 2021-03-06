import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Register from './Register'
import Login from './Login'
import Allnotifs from './Allnotifs'
import Ngrouped from './Ngrouped';

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
        <Route exact path="/" component= {Login} />
        <Route exact path="/Register" component= {Register} />
        <Route exact path="/home" component= {Ngrouped} />
      <Route exact path='/viewall' component={Allnotifs}/>
    </Switch>
  </main>
)

export default Main
// <Route exact path="/logout" component= {Login} />
