import React from 'react';
import { BrowserRouter ,Route, Switch } from 'react-router-dom';

import Header from './components/header';
import Home from './components/home';
import Artists from './components/artists';

const Routes = () => (
	  <BrowserRouter>
		<Header />
		<Switch>
			<Route path="/artist/:artistId" component={Artists} />
			<Route exact path="/" component={Home} />
		</Switch>
	  </BrowserRouter>
  )

export default Routes