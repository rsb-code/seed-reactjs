import HttpService from '../_config/http';

export default class AuthService {
	constructor(props) {
		this.api = new HttpService(props);
	}

	salvarInformacoes = response => {
		localStorage.setItem('_User', JSON.stringify(response));
	};

	isLoggedIn = () => localStorage.getItem('_User') != null;

	getCurrentUser = () => localStorage.getItem('_User');

	login = (user, success, error) => {
		const str = [];
		for (const key in user) {
			if (user.hasOwnProperty(key)) {
				str.push(encodeURIComponent(key) + '=' + encodeURIComponent(user[key]));
			}
		}

		const dataStr = str.join('&');

		this.api
			.post('login', dataStr)
			.then(result => {
				this.salvarInformacoes(result.data);
				success(result);
			})
			.catch(error);
	};

	logout = () => {
		localStorage.removeItem('_User');
	};
}
