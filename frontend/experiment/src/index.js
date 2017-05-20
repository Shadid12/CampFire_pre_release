import React from 'react'
import { render } from 'react-dom'
import { Hamburger } from './components/Hamburger'
import { Gallery } from './components/Gallery'
import './index.css';

// routing
import { Route, Router, IndexRoute, hashHistory }  from 'react-router';


window.React = React

render(
	<Router history={hashHistory}>
		<Route path="/" component={Hamburger}>
		</Route>
		<Route path="/gallery" component={Gallery}>
		</Route>
	</Router>,
	document.getElementById('page')
)
