/** @format */

import '../styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import React, { FC } from 'react';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { wrapper } from '../utils/store';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';
import { queryClient } from '@utils/api';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
const App: FC<AppProps> = ({ Component, ...rest }) => {
	const { store, props } = wrapper.useWrappedStore(rest);
	const isOpen = process.env.NODE_ENV
		? process.env.NODE_ENV === 'development'
		: false;
	return (
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>
				<PersistGate persistor={store.__persistor} loading={<div>Loading</div>}>
					<Component {...props.pageProps} />
				</PersistGate>
				<ToastContainer />
				<ReactQueryDevtools initialIsOpen={isOpen} />
			</QueryClientProvider>
		</Provider>
	);
};

export default App;
