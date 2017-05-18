import React from 'react'
import { render } from 'react-dom'
// react-routing 
import { Route, Router, IndexRoute, hashHistory }  from 'react-router';

// importing components
import { Main } from './components/Main'



window.React = React

render(
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
		</Route>
	</Router>,
	document.getElementById('page')
)
