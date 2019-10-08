import * as Yup from 'yup';

const validation = Yup.object().shape({
	title: Yup.string()
		.ensure()
		.required('Campo obrigatório'),
	body: Yup.string()
		.ensure()
		.required('Campo obrigatório'),
});

export { validation };
