import HttpService from './_config/http';

export default class NoticiasService {
	constructor(props) {
		this.api = new HttpService(props);
	}

	get = id => {
		return this.api.get(`${id}`);
	};

	get = () => {
		return this.api.get(``);
	};

	post = obj => {
		return this.api.post('', obj);
	};

	put = obj => {
		return this.api.put('', obj);
	};

	delete = id => {
		return this.api.delete(`${id}`);
	};
}
