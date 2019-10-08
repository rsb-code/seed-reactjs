import React from 'react';
import PropTypes from 'prop-types';
import { Modal as BootstrapModal } from 'react-bootstrap';

const propTypes = {
	isOpen: PropTypes.bool.isRequired,
	children: PropTypes.node.isRequired,
	handleModalClose: PropTypes.func.isRequired,
};

const defaultProps = {};

export default function Modal(props) {
	const { isOpen, children, handleModalClose } = props;

	return (
		<>
			<BootstrapModal show={isOpen} onHide={() => handleModalClose()}>
				{children}
			</BootstrapModal>
		</>
	);
}

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;
