import * as React from 'react'
import { Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

import Home from './containers/Home'

export const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/user/:id" key="userby" component={Home} />
      <Route path="/" key="home" component={Home} />
    </Switch>
  </BrowserRouter>
)

export default Router