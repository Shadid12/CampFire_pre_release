import { Component } from 'react'

export class SignUp extends Component{
	render(){
		return(
			<div className="center">
			<h2>Sign Up :) </h2>
			<div className="row">
				<div className="col s12">
					 <div className="row">
						<div className="input-field col">
							<input type="text" className="validate" placeholder="Name" />
						</div>
					 </div>
					 <div className="row">
						<div className="input-field col">
							<input type="email" className="validate" placeholder="Email" />
						</div>
					 </div>
					 <div className="row">
						<div className="input-field col">
							<input type="password" className="validate" placeholder="Password" />
						</div>
					 </div>
					 <div className="row">
						<div className="col">
							<a className="waves-effect waves-light btn">Submit</a>
						</div>
					 </div>
				</div>
			</div>
			</div>
		)
	}
}