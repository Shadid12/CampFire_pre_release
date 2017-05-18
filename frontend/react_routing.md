## Reat Router
>npm install react-router@2 --save

>index.js
```javascript
import { Route, Router, IndexRoute, hashHistory }  from 'react-router';
import { Main } from './components/Main' 
<Router history={hashHistory}>
	<Route path="/" component={Main}>
	</Route>
</Router>
```
Now make the Main.js in components folder

```javascript
import { React, Component } from 'react'
export class Main extends Component {
	render(){
	    return(
	        <div>Hello Main Component</div>
	   );
	}
} 
````

