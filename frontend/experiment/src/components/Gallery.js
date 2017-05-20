import { Component } from 'react';
import { Loading } from './helpers/Loading';

export class Gallery extends Component{

	state = {
		loader: true
	}

	componentDidMount() {
		setTimeout( () => {
			this.setState( { loader: false } );
		}, 1500)
		
	}

	render(){
		return(
			<div>
			{ this.state.loader ?
				<Loading /> :
				<h3>Welcome to the page</h3>
			}
			</div>
		)
	}
}