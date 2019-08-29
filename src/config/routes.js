import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../pages/home';
import About from '../pages/about';
import Random from '../pages/random';
import PageNotFound from '../pages/404';

export default () => (
  <Route>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/random" component={Random} />
    <Route
      path='/*'
      exact
      component={PageNotFound}
    />
  </Route>
)
