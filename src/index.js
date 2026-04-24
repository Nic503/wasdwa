import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'

import './style.css'
import BULK from './views/bulk'
import CARTS from './views/carts'
import Inventory from './views/inventory'
import GEEKS from './views/geeks'
import FLOWER from './views/flower'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={BULK} exact path="/bulk" />
        <Route component={CARTS} exact path="/carts" />
        <Route component={Inventory} exact path="/inventory" />
        <Route component={GEEKS} exact path="/" />
        <Route component={FLOWER} exact path="/flower" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
      <Analytics />
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
