import { Component } from 'react';
import './styles/bottomcards.css';
import $ from 'jquery';

export class BottomCards extends Component{

	componentDidMount() {
		$("#f").hide();
		$("#s").hide();
		$("#t").hide();
		setTimeout(() => {
			$("#f").show();
			$("#f").addClass('animated fadeInLeft');
		}, 1500)
		
	}

	render(){
		return(
			<div className="container">
				<div className="card card-1" id="f">
					<img src="http://myartmagazine.com/file/images/12-2015/5-girl-surreal-art.preview.jpg" alt="Smiley face" height="300" width="300"/>
				</div>
			</div>

		)
	}
}