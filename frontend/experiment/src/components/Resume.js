import { Component } from 'react';
import { Loading } from './helpers/Loading';
import { MaterialPage } from './helpers/MaterialPage'

export class Resume extends Component{

	state = {
		loader: true
	}

	componentDidMount() {
		setTimeout( () => {
			this.setState( { loader: false } );
		}, 700)
		
	}

	render(){
		return(
			<div>
			{ this.state.loader ?
				<Loading /> :
				<MaterialPage />
			}
			</div>
		)
	}
}