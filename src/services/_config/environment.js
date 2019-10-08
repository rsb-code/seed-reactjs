/**
 * Configuração das rotas do APP para comunicação com a API
 */

export default {
	currentEnvironment: 'dev',
	baseUrl: {
		dev: {
			urlApi: '[URL DA API EM DEV]',
		},
		homolog: {
			urlApi: '[URL DA API EM HML]',
		},
		prod: {
			urlApi: '[URL DA API EM PROD]',
		},
	},
};
