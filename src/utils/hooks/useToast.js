import React, { useContext, createContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const UseMessageContext = createContext();

export function ToastProvider(props) {
	const { children } = props;

	const defaultOptions = {
		toastId: '16480034-57f9-c2b1-4e7b-088ffd2bebf7',
		position: 'bottom-center',
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: false,
		pauseOnHover: true,
		draggable: true,
	};
	const mostrarToast = (type, message = '') => {
		toast(message, { ...defaultOptions, type });
	};

	return (
		<UseMessageContext.Provider value={{ mostrarToast }}>
			{children}
			<ToastContainer
				position="bottom-center"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick={false}
				rtl={false}
				pauseOnVisibilityChange
				draggable
				pauseOnHover
			/>
		</UseMessageContext.Provider>
	);
}

export const useToast = () => useContext(UseMessageContext);
