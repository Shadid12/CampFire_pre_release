import React from 'react'
import { render } from 'react-dom'
// react-routing 
import { Route, Router, IndexRoute, hashHistory }  from 'react-router';

// importing components
import { Main } from './components/Main'
import { Threads } from './components/Threads'
import { SignUp } from './components/SignUp'
import { Login } from './components/Login'




window.React = React

render(
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
			<Route path="signup" component={SignUp} />
			<Route path="login" component={Login} />
			<IndexRoute component={Threads} />
		</Route>
	</Router>,
	document.getElementById('page')
)
