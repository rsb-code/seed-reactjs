import React from 'react';
import { Form, Col } from 'react-bootstrap';

export default function Input(props) {
	return (
		<>
			<Col md={props.md}>
				<Form.Label>{props.label}</Form.Label>
				<Form.Control {...props} />
			</Col>
		</>
	);
}
