import { Component } from 'react';
import '../styles/photo.css';
import $ from 'jquery';
import { browserHistory } from 'react-router'


export class Photo extends Component{

	componentDidMount() {
		
	}

	goBack(){
		$("#sslist").fadeOut('slow', () => {
			window.location.href = "/";
		});
	}

	render(){
		return(
		<div id="sslist">

		  <button className="button type1" onClick={this.goBack}>
		    Go Back
		  </button>

			<ul className="grid cs-style-2">
				<li>
					<figure className="button type3">
					<img src="https://d13yacurqjgara.cloudfront.net/users/5276/screenshots/2172548/jd_weaver_illustration_kendrickkidd_1x.jpg" alt="img02"/>
					</figure>

				</li>
				<li>
				<figure className="button type3">
				<img src="https://d13yacurqjgara.cloudfront.net/users/68544/screenshots/2172398/drop_1x.png" alt="img04"/>

				</figure>
				</li>
				<li>
				<figure className="button type3">
				<img src="https://d13yacurqjgara.cloudfront.net/users/485324/screenshots/2172192/fitmob_1x.jpg" alt="img06"/>

				</figure>
				</li>
				<li>
				<figure className="button type3">
				<img src="https://d13yacurqjgara.cloudfront.net/users/77241/screenshots/2172501/days-block-print-dribbb_1x.jpg" alt="img05"/>
				</figure>
				</li>
			</ul>

		</div>
		)
	}
}