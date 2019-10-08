import { Row, Form } from 'react-bootstrap';
import { Formik, Field } from 'formik';
import React, { useState, useEffect } from 'react';

import Input from 'components/common/Input';
import Button from 'components/common/Button';

import { useToast } from 'utils/hooks/useToast';
import { toastEnum } from 'utils/enums/toast';

import NoticiasService from 'services/notificas';

import { validation } from './validationSchema';

export default function NoticiaEditarPage(props) {
	const { mostrarToast } = useToast();
	const [model, setmodel] = useState({
		id: undefined,
		title: undefined,
		body: undefined,
	});

	useEffect(function() {
		getItem();
	}, []);

	function getItem() {
		const service = new NoticiasService(props);
		service
			.get(props.match.params.id)
			.then(function(e) {
				setmodel(e.data);
			})
			.catch(function(error) {
				mostrarToast(toastEnum.ERROR, 'Erro ao tentar obter a notícia.');
			});
	}

	function put(obj) {
		const service = new NoticiasService(props);

		service
			.put(obj)
			.then(function(e) {
				mostrarToast(toastEnum.SUCCESS, 'Notícia cadastrada com sucesso.');
			})
			.catch(function(error) {
				mostrarToast(toastEnum.ERROR, 'Erro ao cadastrar a notícia.');
			});
	}

	function remove(id) {
		const service = new NoticiasService(props);

		service
			.delete(id)
			.then(function(e) {
				mostrarToast(toastEnum.SUCCESS, 'Notícia deletada com sucesso.');
			})
			.catch(function(error) {
				mostrarToast(toastEnum.ERROR, 'Erro ao tentar excluir a notícia.');
			});
	}

	return (
		<>
			<h1>Editar Notícias</h1>

			<Formik
				initialValues={model}
				validationSchema={validation}
				enableReinitialize
				onSubmit={(values, { setSubmitting }) => {
					put(values);
					setTimeout(() => {
						setSubmitting(false);
					}, 400);
				}}
			>
				{({ values, errors, handleSubmit, setFieldValue }) => (
					<>
						<Form
							noValidate
							validated={errors.title || errors.body}
							onSubmit={handleSubmit}
						>
							<Row>
								<Field
									md={12}
									required
									name="title"
									label="Título"
									type="text"
									placeholder="Título"
									component={Input}
									value={values.title}
									onChange={o => setFieldValue('title', o.target.value)}
								/>
							</Row>
							<Row>
								<Field
									md={12}
									required
									name="body"
									label="Conteúdo"
									as="textarea"
									rows={3}
									placeholder="conteúdo"
									component={Input}
									value={values.body}
									onChange={o => setFieldValue('body', o.target.value)}
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
								<Button
									variant="danger"
									label="Excluir"
									md={1}
									onClick={o => remove(values.id)}
								/>
							</Row>
						</Form>
					</>
				)}
			</Formik>
		</>
	);
}
