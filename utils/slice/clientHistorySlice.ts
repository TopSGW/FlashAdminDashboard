/** @format */

import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { AppState } from '../store';
export interface ClientHistoryState {
	pagination: number;
	totalPage: number;
	customerTotalPage: number;
}

const initialState: ClientHistoryState = {
	pagination: 1,
	totalPage: 1,
	customerTotalPage: 1,
};

export const ClientHistorySlice = createSlice({
	name: 'clientHis',
	initialState,
	reducers: {
		setClientHIsPagination: (state, action: PayloadAction<number>) => {
			state.pagination = action.payload;
		},
		setClientHIsTotalPage: (state, action: PayloadAction<number>) => {
			state.totalPage = action.payload;
		},
		setCustomerTotalPage: (state, action: PayloadAction<number>) => {
			state.customerTotalPage = action.payload;
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

export const { setClientHIsPagination } = ClientHistorySlice.actions;

export const { setClientHIsTotalPage } = ClientHistorySlice.actions;
export const { setCustomerTotalPage } = ClientHistorySlice.actions;

export const getClientHistoryPagination = (state: AppState) =>
	state.clientHis.pagination;
export const getClientHistoryTotalPage = (state: AppState) =>
	state.clientHis.totalPage;
export const getCustomerTotalPage = (state: AppState) =>
	state.clientHis.totalPage;

export default ClientHistorySlice.reducer;
