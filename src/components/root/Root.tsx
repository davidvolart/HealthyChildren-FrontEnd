import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import LogIn from '../LogIn/LogIn'

const Root = () => (
	<BrowserRouter>
		<div>
			<Route exact path="/login" component={LogIn}/>
		</div>
	</BrowserRouter>
);

export default Root;