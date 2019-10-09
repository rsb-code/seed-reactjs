import * as Yup from 'yup';

const validation = Yup.object().shape({
	titulo: Yup.string()
		.ensure()
		.required('Campo obrigatório'),
	texto: Yup.string()
		.ensure()
		.required('Campo obrigatório'),
});

export { validation };
