import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Routes from './pages/_config/routes';
// import { ToastProvider } from './utils/hooks/useToast';
import * as serviceWorker from './service-worker';

import './assets/styles/base/global.css';

ReactDOM.render(
	<BrowserRouter>
		{/* <ToastProvider> */}
			<Routes />
		{/* </ToastProvider> */}
	</BrowserRouter>,
	document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
