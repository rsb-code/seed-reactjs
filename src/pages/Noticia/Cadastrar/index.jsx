import { Row, Form } from 'react-bootstrap';
import { Formik, Field } from 'formik';
import React, { useState, useEffect } from 'react';

import Input from 'components/common/Input';
import Button from 'components/common/Button';

import { useToast } from 'utils/hooks/useToast';
import { toastEnum } from 'utils/enums/toast';

import NoticiasService from 'services/notificas';

import { validation } from './validationSchema';

export default function NoticiaCadastrarPage(props) {
	const { mostrarToast } = useToast();
	const [model, setmodel] = useState({
		titulo: undefined,
		texto: undefined,
		autorId: 'B64852FB-2656-4756-85D6-EB07788A0072',
	});

	function post(obj) {
		const service = new NoticiasService(props);

		service
			.post(obj)
			.then(function(e) {
				mostrarToast(toastEnum.SUCCESS, 'Notícia cadastrada com sucesso.');

				setTimeout(() => {
					props.history.push('/');
				}, 500);
			})
			.catch(function(error) {
				console.log(JSON.stringify(error));
				mostrarToast(
					toastEnum.ERROR,
					'Ops! Ocorreu um erro durante a tentativa de salvar uma notícia.',
				);
			});
	}

	return (
		<>
			<h1>Cadastrar Notícias</h1>

			<Formik
				initialValues={model}
				validationSchema={validation}
				enableReinitialize
				onSubmit={(values, { setSubmitting }) => {
					post(values);
					setTimeout(() => {
						setSubmitting(false);
					}, 400);
				}}
			>
				{({ values, errors, handleSubmit, setFieldValue }) => (
					<>
						<Form
							noValidate
							validated={errors.titulo || errors.texto}
							onSubmit={handleSubmit}
						>
							<Row>
								<Field
									md={12}
									required
									name="titulo"
									label="Título"
									type="text"
									placeholder="Título"
									component={Input}
									value={values.titulo}
									onChange={o => setFieldValue('titulo', o.target.value)}
								/>
							</Row>
							<Row>
								<Field
									md={12}
									required
									name="texto"
									label="Conteúdo"
									as="textarea"
									rows={3}
									placeholder="conteúdo"
									component={Input}
									value={values.texto}
									onChange={o => setFieldValue('texto', o.target.value)}
								/>
							</Row>

							<Row className="justify-content-center">
								<Button
									variant="success"
									label="Cadastrar"
									md={1}
									onClick={o => handleSubmit()}
								/>
								<Button
									variant="light"
									label="Cancelar"
									md={1}
									onClick={o => props.history.push('/')}
								/>
							</Row>
						</Form>
					</>
				)}
			</Formik>
		</>
	);
}
