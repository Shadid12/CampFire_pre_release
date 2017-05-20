import { Component } from 'react'
import { Link } from 'react-router'
import './styles/nav.css';




export class NotLogged extends Component{
	render(){
		return(
            <ol className="site-nav" id="listA">
              <li className="site-nav__item">
                <a className="site-nav__link"
                   id="a"
                   onMouseEnter={ () => { $('#a').addClass('animated jello'); } }
                   onMouseLeave={ () => { $('#a').removeClass('animated jello'); } }
                   href="/#/">
                    <img src="./assets/icons/011-computer.svg" alt="Home" className="imgClass" />
                    <div>Home</div>
                </a>
              </li>
              <li className="site-nav__item">
                <a className="site-nav__link"
                   id="b"
                   href="/#/signup"
                   onMouseEnter={ () => { $('#b').addClass('animated jello'); } }
                   onMouseLeave={ () => { $('#b').removeClass('animated jello'); } } >
                    <img src="./assets/icons/signup.svg" alt="Home" className="imgClass" />
                    <br />
                    <div>Sign up</div>
                </a>
              </li>
              <li className="site-nav__item">
                <a className="site-nav__link" href="#"
                   id="c"
                   href="/#/login"
                   onMouseEnter={ () => { $('#c').addClass('animated jello'); } }
                   onMouseLeave={ () => { $('#c').removeClass('animated jello'); } } >
                    <img src="./assets/icons/login.svg" alt="Home" className="imgClass"  />
                    <div>Login</div>
                </a>
              </li>
              

            </ol>

		)
	}
}

export class Logged extends Component{

	logOutHandler(){
		window.localStorage.removeItem('token');
		window.location.assign("/");
	}

	render(){
		return(
	<nav>
		<div className="nav-wrapper light-blue darken-1">
			<a href="#" className="brand-logo">CampFire</a>
			<ul id="nav-mobile" className="right hide-on-med-and-down">
				<li> <Link to="/"> Home </Link> </li>
				<li> <a href="#"> Post </a></li>
				<li><a href="#"> Groups </a></li>
				<li><a onClick={this.logOutHandler}> Logout </a></li>
			</ul>
		</div>
	</nav>
		)
	}
}