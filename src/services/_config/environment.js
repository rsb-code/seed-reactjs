/**
 * Configuração das rotas do APP para comunicação com a API
 */

export default {
	currentEnvironment: 'dev',
	baseUrl: {
		dev: {
			urlApi: 'http://puc-minicurso.azurewebsites.net/',
		},
		homolog: {
			urlApi: '[URL DA API EM HML]',
		},
		prod: {
			urlApi: '[URL DA API EM PROD]',
		},
	},
};
