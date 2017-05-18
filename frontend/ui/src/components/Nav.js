import { Component } from 'react'
import { Link } from 'react-router'

export class Nav extends Component{
	render(){
		return(
			<div>
			<h1>I am the nav component</h1>
			<ul>
				<li> <Link to="/"> Home </Link> </li>
				<li> <Link to="/signup"> SignUp </Link> </li>
				<li> <Link to="/login"> Login </Link> </li>
			</ul>
			</div>
		)
	}
}