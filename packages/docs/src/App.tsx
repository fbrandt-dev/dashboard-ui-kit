import React from 'react';
import './bootstrap.css'
import '@duik/it/dist/styles.css'
import '@duik/icon/dist/styles.css'
import './App.css'


import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Docs from './Docs'

const App = () => {

  return (
    <BrowserRouter basename="/duik">
      <Switch>
        <Route path="/docs" component={Docs} />
        <Redirect to="/docs" />
      </Switch>
    </BrowserRouter>
  )
}

export default App;