import React from 'react'
import { render } from 'react-dom'
import { Hamburger } from './components/Hamburger'
import './index.css';

window.React = React

render(
	<div>
		<Hamburger />
	</div>,
	document.getElementById('page')
)
