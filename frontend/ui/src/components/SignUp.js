import { Component } from 'react'
import $ from 'jquery';

export class SignUp extends Component{

	state = {
			name: '',
			email: '',
			password: '',
	}

	handlePost = (e) => {
		// console.log(this.state)
		// this.setState( { name: '', email: '', password: '' } );

		const d = {
			'user':{
				name: this.state.name,
				email: this.state.email,
				password: this.state.password,
				password_confirmation: this.state.password
			}
		}
		
		var url = "http://localhost:8080/v1/users"
		$.ajax({
			
			type: "POST",
			url: url,
			data: d,
			email: d.user.email,
			password:d.user.password,
			
			success: function(res){
			  // sign in after
			  console.log(res);
			  const lrl = "http://localhost:8080/user_token"
			  const l = {
			  	'auth':{
			  		'email': this.email,
			  		'password': this.password
			  	}
			  }

			  $.ajax({
			  	type: "POST",
				url: lrl,
				data: l,

				success: function(r){
					console.log(r);
					window.location.assign("/");
				}

			  })
			} // end of success function

		});
		this.setState( { name: '', email: '', password: '' } );
		e.preventDefault();
	}

	logIn(){
		console.log("Lets see if we can do it");
	}

	render(){

		return(
			<div className="center">
			<h2>Sign Up :) </h2>
			<div className="row">
				<div className="col s12">
					 <div className="row">
						<div className="input-field col">
							<input type="text" 
									className="validate" 
									placeholder="Name"
									value={this.state.name}
									onChange={(event) => this.setState({ name: event.target.value })} />
						</div>
					 </div>
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
							<button className="waves-effect waves-light btn" onClick={this.handlePost}>Submit</button>
						</div>
					 </div>
				</div>
			</div>
			</div>
		)
	}
}