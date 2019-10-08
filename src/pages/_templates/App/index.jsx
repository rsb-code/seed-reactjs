import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

import HeaderContainer from 'components/containers/Header';
import FooterContainer from 'components/containers/Footer';
import NavContainer from 'components/containers/Nav';
import TabContainer from 'components/containers/Tab';

import './styles.css';

const data = [
	{
		title: 'Home',
		toUrl: '/',
		icon: <FontAwesomeIcon icon={faHome} />,
	},
];

export default function AppTemplate({ children }) {
	return (
		<>
			<HeaderContainer />

			<NavContainer>
				<TabContainer items={data} />
			</NavContainer>
			<main>
				<Container>
					<Row>
						<Col md={12}>{children}</Col>
					</Row>
				</Container>
			</main>
			<FooterContainer />
		</>
	);
}
