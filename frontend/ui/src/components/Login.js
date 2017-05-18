import { Component } from 'react'
import $ from 'jquery'

export class Login extends Component{
	state = {
			email: '',
			password: '',
	}

	handleSignin = (e) => {
		const lrl = "http://localhost:8080/user_token"

		const l = {
			  	'auth':{
			  		'email': this.state.email,
			  		'password': this.state.password
			  	}
		}
		console.log(l);
		$.ajax({

			type: "POST",
			url: lrl,
			data: l,

			success: function(r){
			localStorage.setItem('token', r.jwt);
			console.log(localStorage.getItem('token'));
			window.location.assign("/");
			
			}

		})
	}

	render(){
		return(

			<div className="center">
			<h2>Sign Up :) </h2>
			<div className="row">
				<div className="col s12">
					 <div className="row">
						<div className="input-field col">
							<input type="email" 
									className="validate" 
									placeholder="Email"
									value={this.state.email}
									onChange={(event) => this.setState({ email: event.target.value })} />
						</div>
					 </div>
					 <div className="row">
						<div className="input-field col">
							<input type="password" 
									className="validate" 
									placeholder="Password"
									value={this.state.password}
									onChange={(event) => this.setState({ password: event.target.value })} />
						</div>
					 </div>
					 <div className="row">
						<div className="col">
							<button className="waves-effect waves-light btn" onClick={this.handleSignin}>Submit</button>
						</div>
					 </div>
				</div>
			</div>
			</div>

		)
	}
}