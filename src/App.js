import React from 'react'
import {HashRouter, Route, Switch} from 'react-router-dom'
import Home from './pages/Home'

import './App.css'
import {ProtectedRoute} from './components/ProtectedRoute'


class App extends React.Component {
 
  render () {

    return(
      <HashRouter basename="/">
      <div>
      
      <Switch>
      <Route exact path="/" component={Home} />
      <ProtectedRoute exact path ="/mytasks" component={Home} />
      <Route exact path="/mytasks/add" component={() => <h1>Add a task</h1>} />
      <Route exact path="/mytasks/view/:id" component={() => <h1>A View task page</h1>} />
      <ProtectedRoute exact path="/my-info" component={Home} />
      <Route exact path="/login" component={Home} />
      <Route exact path="*" component={() => "404 NOT FOUND"} />
      </Switch>
      
      </div>
      </HashRouter>
    )
  }
}

export default App
