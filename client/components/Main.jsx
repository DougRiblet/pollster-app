import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

export default class Main extends Component {
  render () {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/create' component={Create}/>
          <Route path='/login' component={Login}/>
        </Switch>
      </main>
    )
  }
}
 