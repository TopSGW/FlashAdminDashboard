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
import AuthProvider from 'context/auth_context';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme({
    palette: {
      flashPrimary: {
        main: '#FFAB17',
        light: '#ff7961',
        dark: '#ba000d',
      },
    },
  });

  declare module '@mui/material/styles' {
    interface Palette {
        flashPrimary?: Palette['secondary'];
    }
  
    // allow configuration using `createTheme`
    interface PaletteOptions {
        flashPrimary?: PaletteOptions['secondary'];
    }
  }

const App: FC<AppProps> = ({ Component, ...rest }) => {
	const { store, props } = wrapper.useWrappedStore(rest);
	const isOpen = process.env.NODE_ENV
		? process.env.NODE_ENV === 'development'
		: false;
	return (
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>
				<PersistGate persistor={store.__persistor} loading={<div>Loading</div>}>
					<AuthProvider>
						<ThemeProvider theme={theme}>
							<Component {...props.pageProps} />
						</ThemeProvider>
					</AuthProvider>
				</PersistGate>
				<ToastContainer />
				<ReactQueryDevtools initialIsOpen={isOpen} />
			</QueryClientProvider>
		</Provider>
	);
};

export default App;
