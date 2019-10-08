export const ObterQueryString = params => {
	const str = [];
	for (const key in params) {
		if (params.hasOwnProperty(key)) {
			str.push(encodeURIComponent(key) + '=' + encodeURIComponent(params[key]));
		}
	}
	const dataStr = str.join('&');

	return dataStr;
};
