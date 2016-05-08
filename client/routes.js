import React from 'react';
import { Route, IndexRoute } from 'react-router';

import { App, Home, NotFound } from './components/App.js';
import { About } from './components/About.js';
import { Workshops } from './components/Workshops.js';

export const routes = (
  <Route path='/' title='App' component={App}>
    <IndexRoute component={Home} />
    <Route path='about' title='App - About' component={About} />
    <Route path='workshops' title='App - Workshops' component={Workshops} />
    <Route path='*' title='404: Not Found' component={NotFound} />
  </Route>
);

export default routes;
