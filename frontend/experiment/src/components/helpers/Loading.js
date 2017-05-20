import { Component } from 'react';
import '../styles/loader.scss';

export class Loading extends Component{
	render(){
		return(
			<div id="loading-wrapper">
			  <div id="loading-text">LOADING</div>
			  <div id="loading-content"></div>
			</div>
		)
	}
}