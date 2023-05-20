/** @format */

import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { AppState } from '../store';

export enum AUTH_STEP {
	STEP1 = 'step1',
	STEP2 = 'steop2',
}
export interface IAuth {
	first_name: string;
	last_name: string;
	email: string;
	img: string;
	is2FA: boolean;
	isInit: boolean;
	step: AUTH_STEP;
	secret: string;
	qrImage: string;
}
export interface IQRInfo {
	secret: string;
	qrImage: string;
}
const initAuthState: IAuth = {
	first_name: '',
	last_name: '',
	email: '',
	img: '',
	is2FA: true,
	isInit: false,
	step: AUTH_STEP.STEP1,
	secret: '',
	qrImage: '',
};

export const AuthSlice = createSlice({
	name: 'auth',
	initialState: initAuthState,
	reducers: {
		setAuth: (state, action: PayloadAction<IAuth>) => {
			state.first_name = action.payload.first_name;
			state.last_name = action.payload.last_name;
			state.email = action.payload.email;
			state.img = action.payload.img;
			state.is2FA = action.payload.is2FA;
			state.step = action.payload.step;
			state.isInit = action.payload.isInit;
		},
		setInit: (state, action: PayloadAction<boolean>) => {
			state.isInit = action.payload;
		},
		setQRInfo: (state, action: PayloadAction<IQRInfo>) => {
			state.secret = action.payload.secret;
			state.qrImage = action.payload.qrImage;
			console.log('state', state);
		},
	},
	extraReducers: {
		[HYDRATE]: (state, action) => {
			return {
				...state,
				...action.payload,
			};
		},
	},
});
export const { setAuth } = AuthSlice.actions;
export const getAuth = (state: AppState) => state.auth;
export const { setInit } = AuthSlice.actions;
export const fa2Init = (state: AppState) => state.auth?.isInit;
export const { setQRInfo } = AuthSlice.actions;
export const qrInfo = (state: AppState) => {
	return { secret: state.auth.secret, qrImage: state.auth.qrImage };
};
export default AuthSlice.reducer;
