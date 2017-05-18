## Reat Router
>npm install react-router@2 --save

>index.js
```javascript
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

```
Now make the Main.js in components folder

```javascript
import { Component } from 'react'

export class Main extends Component {
	render(){
	    return(
	        <div>Hello Main Component</div>
	   );
	}
} 
````

#### Lets add the the Nav bar
adding multiple routing in the main
> Main.js

```javascript
render(
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
			<Route path="signup" component={SignUp} />
			<IndexRoute component={Threads} />
		</Route>
	</Router>,
	document.getElementById('page')
)
```
#### Adding Link Component

```javascript
import { Component } from 'react'
import { Link } from 'react-router'

export class Nav extends Component{
	render(){
		return(
			<div>
			<h1>I am the nav component</h1>
			<ul>
				<li> <Link to="/"> Home </Link> </li>
				<li> <Link to="/signup"> SignUp </Link> </li>
				<li> <Link to="/login"> Login </Link> </li>
			</ul>
			</div>
		)
	}
}
```