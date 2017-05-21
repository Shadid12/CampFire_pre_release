import { Component } from 'react';
import '../styles/material.css';
import {MediaQuery} from 'react-responsive';
import { PlayButton } from './PlayButton'
import $ from 'jquery';
import { MenuItems } from '../MenuItems';

export class MaterialPage extends Component{

	componentDidMount() {
		setTimeout( () => { 
			$("#s").addClass("animated swing") }, 1000)
	}

	goBack(){
		window.location.href = "/";
	}

	render(){
		return(
			<div className="container">
				<div className="center">
					<MenuItems />
					<h3 className="cyan-text text-lighten-1" id="s"> Play me  !!</h3>
					<PlayButton />
				</div>
			</div>
		)
	}
}