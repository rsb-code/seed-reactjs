import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
	items: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string,
		}),
	),
};

const defaultProps = {
	items: [{ title: '' }],
};

export default function List(props) {
	const { items } = props;
	return (
		<ul>
			{items.map(item => (
				<li key={item.id}>{item.title}</li>
			))}
		</ul>
	);
}

List.propTypes = propTypes;
List.defaultProps = defaultProps;
