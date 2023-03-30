/** @format */

import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { AppState } from '../store';

export type userType = {
	email: string | null;
	userName: string | null;
	firstName: string | null;
	lastName: string | null;
	profileImg: string | null;
};

export type userStateType = {
	isloading: boolean;
	isWarning: boolean;
	error: string | null;
	isError: boolean;
	user: userType | null;
	loaded: boolean;
};

const initialState: userStateType = {
	isloading: false,
	isWarning: false,
	error: null,
	isError: false,
	user: null,
	loaded: false,
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setLoading: (state: userStateType, action: PayloadAction<boolean>) => {
			state = {
				...state,
				isError: false,
				isWarning: false,
				isloading: true,
				loaded: false,
				error: null,
			};
		},
		setError: (state: userStateType, action: PayloadAction<string>) => {
			state = {
				...state,
				isError: true,
				isloading: false,
				isWarning: false,
				user: null,
				loaded: true,
				error: action.payload,
			};
		},
		setUser: (state: userStateType, action: PayloadAction<userType>) => {
			state = {
				...state,
				isError: false,
				isloading: false,
				isWarning: false,
				user: action.payload,
				loaded: true,
				error: null,
			};
		},
		setWarning: (state: userStateType, action: PayloadAction<string>) => {
			state = {
				...state,
				isError: false,
				isloading: false,
				isWarning: true,
				user: null,
				loaded: true,
				error: action.payload,
			};
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

export const { setLoading, setError, setUser, setWarning } = userSlice.actions;
export const selectUserSate = (state: AppState) => state.user.value;
export default userSlice.reducer;
