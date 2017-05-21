import { Component } from 'react';
import { Loading } from './helpers/Loading';
import { Photo } from './helpers/Photo'

export class Gallery extends Component{

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
				<Photo />
			}
			</div>
		)
	}
}