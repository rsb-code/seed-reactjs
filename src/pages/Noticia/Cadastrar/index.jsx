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
		title: undefined,
		body: undefined,
	});

	function post(obj) {
		console.log(obj);
		const service = new NoticiasService(props);

		service
			.post(obj)
			.then(function(e) {
				mostrarToast(toastEnum.SUCCESS, 'Notícia cadastrada com sucesso.');
			})
			.catch(function(error) {
				console.warn(error);
				mostrarToast(toastEnum.ERROR, 'Erro ao cadastrar a notícia.');
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
							</Row>
						</Form>
					</>
				)}
			</Formik>
		</>
	);
}
