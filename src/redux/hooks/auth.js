/**
 * Estrutura adaptada do Ducks Modular Redux
 * - Types
 * - Reducer
 * - Actions
 */
// Types (Aka constants em outras fontes)
export const Types = {
	LOGIN: 'seeds/auth/LOGIN',
	LOGOUT: 'seeds/auth/LOGOUT',
};

// Reducer
export default function reducer(state, action) {
	switch (action.type) {
		case Types.LOGIN:
			return {
				...state,
				user: {
					...action.payload.user,
					isAuthenticated: true,
				},
			};
		case Types.LOGOUT:
			return {
				...state,
				user: {
					name: '',
					isAuthenticated: false,
				},
			};
		default:
			return state;
	}
}
