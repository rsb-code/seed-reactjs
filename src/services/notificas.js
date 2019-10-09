import HttpService from './_config/http';

export default class NoticiasService {
	constructor(props) {
		this.api = new HttpService(props);
	}

	getPost = id => {
		return this.api.get(`v1/Posts/${id}`);
	};

	get = () => {
		return this.api.get(`v1/Posts`);
	};

	post = obj => {
		return this.api.post('v1/Posts', obj);
	};

	put = obj => {
		return this.api.put('v1/Posts', obj);
	};

	delete = id => {
		return this.api.delete(`v1/Posts/${id}`);
	};
}
