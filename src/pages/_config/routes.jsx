import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router';

import Loading from 'components/common/Loading';
import store from 'redux/configureStore';
import authReducer from 'redux/hooks/auth';
import AppTemplate from '../_templates/App';
import NoticiaCadastrarPage from '../Noticia/Cadastrar';
import NoticiaEditarPage from '../Noticia/Editar';
import NoticiaListarPage from '../Noticia/Listar';

import 'global.css';

// const LoginPage = React.lazy(() => import('Components/Pages/Login'));
import { StoreProvider } from '../../utils/hooks/useStore';

const initialState = {
	user: {
		isAuthenticated: false,
		name: '',
	},
};

export default function Routes() {
	return (
		<>
			<Provider store={store}>
				<StoreProvider initialState={initialState} reducer={authReducer}>
					<Suspense fallback={<Loading />}>
						<Switch>
							<AppTemplate>
								<Route path="/" exact component={NoticiaListarPage} />
								<Route path="/noticia" exact component={NoticiaCadastrarPage} />
								<Route
									path="/noticia/:id"
									exact
									component={NoticiaEditarPage}
								/>
							</AppTemplate>
						</Switch>
					</Suspense>
				</StoreProvider>
			</Provider>
		</>
	);
}
