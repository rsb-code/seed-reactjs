import { HttpStatus } from 'utils/constants/http-status';
import axios from 'axios';
import environment from './environment';

export default class HttpService {
	constructor(props) {
		let user = JSON.stringify(localStorage.getItem('_User'));

		let service = axios.create({
			headers: {
				'Content-Type': 'application/json',
			},
		});

		if (user.access_token) {
			service.defaults.headers.common[
				'Authorization'
			] = `Bearer ${user.access_token}`;
		}

		service.interceptors.request.use(
			config => {
				return config;
			},
			error => {
				return Promise.reject(error);
			},
		);
		service.interceptors.response.use(
			response => {
				return response;
			},
			error => {
				if (error.response) {
					switch (error.response.HttpStatus) {
						case HttpStatus.UNAUTHORIZED:
							this.redirectTo('/logout');
							break;
					}
				}
				return Promise.reject(error);
			},
		);

		this.props = props;
		this.service = service;
	}

	redirectTo = path => {
		this.props.history.push(path);
	};

	get(path) {
		const url =
			environment.baseUrl[environment.currentEnvironment].urlApi + path;
		return this.service.get(url);
	}

	put(path, payload) {
		const url =
			environment.baseUrl[environment.currentEnvironment].urlApi + path;
		return this.service.put(url, payload);
	}

	post(path, payload) {
		const url =
			environment.baseUrl[environment.currentEnvironment].urlApi + path;
		return this.service.post(url, payload);
	}

	postFile(path, payload) {
		const formData = new FormData();

		formData.append('file', payload);

		const url =
			environment.baseUrl[environment.currentEnvironment].urlApi + path;
		return this.service.post(url, formData, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		});
	}

	delete(path) {
		const url =
			environment.baseUrl[environment.currentEnvironment].urlApi + path;
		return this.service.delete(url);
	}
}
