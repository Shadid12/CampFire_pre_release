import { Component } from 'react';
import '../styles/playButton.css';
import '../styles/waves.css';
import $ from 'jquery';


export class PlayButton extends Component{


	render(){
		return(
			<div className="container">
			  <div className="pause-btn">
			    <div className="pause"
			    	  onClick={ () => 
			  			{ 
			  				$('.pause').removeClass('show');
  							$('.play').removeClass('playing');
  							$('.wv').removeClass('wave');
			  			} 
			  		  }>
			  	</div>
			  </div>
			  <div className="play" 
			  		onClick={ () => 
			  			{ 
			  				$(".play").addClass("playing");
			  				$('.pause').addClass('show');
			  				$('.wv').addClass('wave');
			  			} 
			  		}>
			  </div>
			  		<div className="ocean">
					  <div className="wv"></div>
					  <div className="wv"></div>
					</div>
			</div>

		)
	}
}