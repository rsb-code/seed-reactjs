import React from 'react';
import { Table as BootstrapTable } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';

export default function Table(props) {
	const { headers, data } = props;

	return (
		<>
			{data && data.length > 0 ? (
				<BootstrapTable responsive striped hover>
					<thead>
						<tr>
							{headers.map((e, i) => (
								<th>{e}</th>
							))}
						</tr>
					</thead>
					<tbody>
						{data.map((e, i) => (
							<tr>
								<td>{e.id}</td>
								<td>{e.titulo}</td>
								<td style={{ width: '45px' }}>
									<a href={`noticia/${e.id}`}>
										<FontAwesomeIcon icon={faSearchPlus} />
									</a>
								</td>
							</tr>
						))}
					</tbody>
				</BootstrapTable>
			) : (
				'Nenhum item encontrado.'
			)}
		</>
	);
}
