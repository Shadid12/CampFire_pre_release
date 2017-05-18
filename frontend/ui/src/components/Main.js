import { Component } from 'react'
import { Nav } from './Nav'

export class Main extends Component {
	render(){
	    return(
	        <div>
	        	<Nav />
	        	<h3></h3>
	        	{ this.props.children }
	        </div>
	   );
	}
} 