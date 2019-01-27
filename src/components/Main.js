import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';
import ReactBootstrap from 'react-bootstrap';

class Main extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render()
	{
		return (
			<div class="container">
				<h1 id="header">Amr Hammam</h1>
			</div>
			);
	}
	
}

export default Main;