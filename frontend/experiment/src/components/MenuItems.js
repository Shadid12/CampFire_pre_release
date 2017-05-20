import { Component } from 'react';
import $ from 'jquery';
import './menuitems.css'

export class MenuItems extends Component{

	componentDidMount() {
    $("#listA").hide();
    setTimeout(() => {
      $("#listA").show();
      $("#listA").addClass('animated bounceInUp');
    }, 300)
	}

	render(){
		return(
            <ol className="site-nav" id="listA">
              <li className="site-nav__item">
                <a className="site-nav__link"
                   id="a"
                   onMouseEnter={ () => { $('#a').addClass('animated jello'); } }
                   onMouseLeave={ () => { $('#a').removeClass('animated jello'); } }
                   href="/">
                    <img src="./assets/icons/011-computer.svg" alt="Home" className="imgClass" />
                    <div>Home</div>
                </a>
              </li>
              <li className="site-nav__item">
                <a className="site-nav__link"
                   href="/#/gallery"
                   id="b"
                   onMouseEnter={ () => { $('#b').addClass('animated jello'); } }
                   onMouseLeave={ () => { $('#b').removeClass('animated jello'); } } >
                    <img src="./assets/icons/004-apple.svg" alt="Home" className="imgClass" />
                    <br />
                    <div>Gallery</div>
                </a>
              </li>
              <li className="site-nav__item">
                <a className="site-nav__link" href="#"
                   id="c"
                   onMouseEnter={ () => { $('#c').addClass('animated jello'); } }
                   onMouseLeave={ () => { $('#c').removeClass('animated jello'); } } >
                    <img src="./assets/icons/006-chemistry.svg" alt="Home" className="imgClass"  />
                    <div>Resume</div>
                </a>
              </li>
              <li className="site-nav__item">
                <a className="site-nav__link" href="#"
                    id="d"
                    onMouseEnter={ () => { $('#d').addClass('animated jello'); } }
                    onMouseLeave={ () => { $('#d').removeClass('animated jello'); } } >
                    <img src="./assets/icons/micro.svg" alt="Home" className="imgClass"  />
                    <br />
                    <div>My Work</div>
                </a>
              </li>

            </ol>
		)
	}
}