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
const initialState = {
	isAuthenticated: false,
	token: null,
	user: {},
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case Types.LOGIN:
			return {
				...state,
				user: {
					...action.payload.user,
				},
				isAuthenticated: true,
				token: action.payload.token,
			};
		case Types.LOGOUT:
			return {};
		default:
			return state;
	}
}

// Actions
export function login(username, password, token) {
	return {
		type: Types.LOGIN,
		payload: {
			token,
			user: {
				username,
				password,
			},
		},
	};
}

export function logout() {
	return {
		type: Types.LOGOUT,
	};
}
