import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import LogIn from '../LogIn/LogIn'
import SignUp from '../SignUp/SignUp'

const Root = () => (
	<BrowserRouter>
		<div>
			<Route exact path="/login" component={LogIn}/>
			<Route exact path="/signup" component={SignUp}/>
		</div>
	</BrowserRouter>
);

export default Root;