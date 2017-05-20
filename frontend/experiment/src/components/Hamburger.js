import { Component } from 'react';
import './hamburger.css';
import $ from 'jquery';
import animate from 'animate.css';
import { MenuItems } from './MenuItems'
import { BottomCards } from './BottomCards'

export class Hamburger extends Component{

	state = {
		isOpen: false
	}
	
	handleHamburgerAnimation = () => {
	  var i, resize;

	 $("div").toggleClass("cross");

	 if( this.state.isOpen ){
	 	$('#heading').removeClass('animated bounceOutLeft');
	 	$('#heading').addClass('animated bounce');
	 	
	 }else{
	 	$('#heading').addClass('animated bounceOutLeft');
	 }

	 // $('#heading').addClass('animated bounceOutLeft');

	 this.setState({ isOpen: !(this.state.isOpen) });
	}

	render(){
		return(
<div className="center">
  <svg viewBox="0 0 800 600" onClick={this.handleHamburgerAnimation}>
    <path d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200" id="top" ></path>
    <path d="M300,320 L540,320" id="middle" ></path>
    <path d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190" id="bottom" transform="translate(480, 320) scale(1, -1) translate(-480, -318) "></path>
  </svg>
  <div className="center">
  	<h1 id="heading">The Boring Site</h1>
  	{ this.state.isOpen ?
  		<div>
			<MenuItems />
			<br /><br /><br /><br /><br /><br />
			<BottomCards />
		</div>
		:
		<p></p>
  	}
  </div>

</div>




		)
	}
}