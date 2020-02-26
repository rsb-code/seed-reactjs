import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router';

import Loading from '../../components/common/loading';
import store from '../../redux/configure-store';
import AppTemplate from '../_templates/app';

export default function Routes() {
	return (
		<>
			<Provider store={store}>
				<Suspense fallback={<Loading />}>
					<Switch>
						<AppTemplate>
						</AppTemplate>
					</Switch>
				</Suspense>
			</Provider>
		</>
	);
}
