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

