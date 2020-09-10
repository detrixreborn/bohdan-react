import React, { Fragment } from 'react'
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import { Home } from "./screens/home/Home";

const App = (props) => {
  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Redirect exact from='/' to='/home' />
          <Route exact path='/home' component={Home} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  )
};

export default App
