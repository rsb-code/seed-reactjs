import React from 'react';
import {
	Navbar,
	NavDropdown,
	Form,
	Nav,
	FormControl,
	Button,
} from 'react-bootstrap';

import './style.css';

const propTypes = {};

const defaultProps = {};

export default function HeaderContainer(props) {
	return (
		<Navbar bg="light" expand="lg">
			<Navbar.Brand href="/">Blog</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link href="/">Home</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}

HeaderContainer.propTypes = propTypes;
HeaderContainer.defaultProps = defaultProps;
