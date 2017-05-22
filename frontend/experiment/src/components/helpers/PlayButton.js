import { Component } from 'react';
import '../styles/playButton.css';
import '../styles/waves.css';
import $ from 'jquery';
import { MenuItems } from '../MenuItems';



export class PlayButton extends Component{
	
	state = {
		isPlaying: false
	}

	componentDidMount() {
			setTimeout( () => { 
				$("#s").addClass("animated swing") }, 1000)
	}

	render(){
		

		return(
			<div>
			
			<MenuItems />
			<h3 className="cyan-text text-lighten-1" id="s"> Play me  !!</h3>
			<div className="container">
			  <div className="pause-btn">
			    <div className="pause"
			    	  onClick={ () => 
			  			{ 	
			  				var x = document.getElementById("myAudio");
			  				x.pause();
			  				$('.pause').removeClass('show');
  							$('.play').removeClass('playing');
  							$('.wv').removeClass('loader-container');
  							this.props.handler;
			  			} 
			  		  }>
			  	</div>
			  </div>
			  <div className="play" 
			  		onClick={ () => 
			  			{ 
			  				var x = document.getElementById("myAudio");
			  				x.play();
			  				$(".play").addClass("playing");
			  				$('.pause').addClass('show');
			  				$('.wv').addClass('loader-container');
			  				this.props.handler;
			  			} 
			  		}>
			  </div>
			</div>


			<div className="wv">
				<div className="rectangle-1"></div>
				<div className="rectangle-2"></div>
				<div className="rectangle-3"></div>
				<div className="rectangle-4"></div>
				<div className="rectangle-5"></div>
				<div className="rectangle-6"></div>
				<div className="rectangle-5"></div>
				<div className="rectangle-4"></div>
				<div className="rectangle-3"></div>
				<div className="rectangle-2"></div>
				<div className="rectangle-1"></div>	
			</div>


			<audio id="myAudio">
			  <source 
			  src="./assets/audio/cold.mp3" type="audio/mpeg"/>
			</audio>


			</div>
		)
	}
}