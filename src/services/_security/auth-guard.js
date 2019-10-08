import React from 'react';

import { Route, Redirect } from 'react-router-dom';

import AuthService from './auth';

const AuthGuardService = ({ component: Component, ...rest }) => {
	const auth = new AuthService(null);

	return (
		<Route
			{...rest}
			render={props =>
				auth.isLoggedIn() ? (
					<Component {...props} />
				) : (
					<Redirect
						to={{
							pathname: '/login',
							state: { from: props.location },
						}}
					/>
				)
			}
		/>
	);
};

export default AuthGuardService;
