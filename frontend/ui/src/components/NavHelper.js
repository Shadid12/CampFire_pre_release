import { Component } from 'react'
import { Link } from 'react-router'

export class NotLogged extends Component{
	render(){
		return(
	<nav>
		<div className="nav-wrapper light-blue darken-1">
			<a href="#" className="brand-logo">CampFire</a>
			<ul id="nav-mobile" className="right hide-on-med-and-down">
				<li> <Link to="/"> Home </Link> </li>
				<li><Link to="/signup"> SignUp </Link> </li>
				<li><Link to="/login"> Login </Link></li>
			</ul>
		</div>
	</nav>
		)
	}
}

export class Logged extends Component{
	render(){
		return(
	<nav>
		<div className="nav-wrapper light-blue darken-1">
			<a href="#" className="brand-logo">CampFire</a>
			<ul id="nav-mobile" className="right hide-on-med-and-down">
				<li> <Link to="/"> Home </Link> </li>
				<li> <a href="#"> Post </a></li>
				<li><a href="#"> Groups </a></li>
				<li><a href="#"> Logout </a></li>
			</ul>
		</div>
	</nav>
		)
	}
}