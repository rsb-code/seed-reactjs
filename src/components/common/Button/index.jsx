import React from 'react';
import { Button as BootstrapButton, Col } from 'react-bootstrap';

export default function Button(props) {
	return (
		<>
			<Col md={props.md}>
				<BootstrapButton {...props}>{props.label}</BootstrapButton>
			</Col>
		</>
	);
}
