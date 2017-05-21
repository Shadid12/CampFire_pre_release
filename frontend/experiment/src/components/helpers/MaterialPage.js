import { Component } from 'react';
import '../styles/material.css';
import {MediaQuery} from 'react-responsive';
import { PlayButton } from './PlayButton'
import $ from 'jquery';


export class MaterialPage extends Component{

	state = {
		isPlaying: false
	}

	goBack(){
		window.location.href = "/";
	}

	handlePlaying(){
		console.log("Fucking A");
	}

	render(){
		return(
			<div className="container">
				<div className="center">
					<PlayButton handler = {this.handlePlaying}/>
				</div>
			</div>
		)
	}
}