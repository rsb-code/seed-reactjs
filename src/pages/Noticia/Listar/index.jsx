import React, { useState, useEffect } from 'react';

import NoticiasService from 'services/notificas';
import { useToast } from 'utils/hooks/useToast';
import { toastEnum } from 'utils/enums/toast';
import Table from 'components/containers/Table';

export default function NoticiaListarPage(props) {
	const [list, setlist] = useState({});
	const { mostrarToast } = useToast();

	function getItens() {
		const service = new NoticiasService(props);

		service
			.get()
			.then(function(e) {
				setlist(e);
			})
			.cathc(function(error) {
				mostrarToast(toastEnum.ERROR, 'Erro ao tentar obter a listagem.');
			});
	}

	return (
		<>
			<h1>
				Notícias
				<div className="header-link">
					<a href={'/noticia'}>Cadastrar</a>
				</div>
			</h1>

			<Table headers={['', 'Titulo', '']} data={list} />
		</>
	);
}
