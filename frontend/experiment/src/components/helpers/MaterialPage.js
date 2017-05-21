import { Component } from 'react';
import '../styles/material.css';
import {MediaQuery} from 'react-responsive';
import { PlayButton } from './PlayButton'
import $ from 'jquery';

export class MaterialPage extends Component{

	componentDidMount() {
		setTimeout( () => { 
			$("#s").addClass("animated swing") }, 1000)
	}

	render(){
		return(
			<div className="container">
				<div className="center">
					<button className="waves-effect waves-light btn" onClick={this.goBack}>
						Back
					</button>
					<h3 className="cyan-text text-lighten-1" id="s"> Play me  !!</h3>
					<PlayButton />
				</div>
			</div>
		)
	}
}