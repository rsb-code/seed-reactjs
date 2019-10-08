import React from 'react';
import { Mensagens } from './constants/mensagens';

export const TratarRetornoDeErro = error => {
	let mensagem = '';

	console.warn('Erro', JSON.stringify(error));
	console.log('Erro', error);

	if (error && error.response && error.response.data) {
		const { data } = error.response;

		if (data.mensagens) {
			mensagem = (
				<>
					{data.mensagens.join(' ')} <br /> {data.id}
				</>
			);
		} else {
			mensagem = Mensagens.mensagemErroDuranteRequisicao;
		}
	} else {
		mensagem = Mensagens.mensagemErroDuranteRequisicao;
	}

	return mensagem;
};
