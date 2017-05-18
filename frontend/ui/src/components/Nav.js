import { Component } from 'react'
import { NotLogged, Logged } from './NavHelper'

let k = localStorage.getItem('token');

export class Nav extends Component{

	render(){
		if(k){
			return(
				<Logged />
			)
		}else{
			return(
				<NotLogged />
			)
		}
	}
}