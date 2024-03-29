/** @format */

import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { AppState } from '../store';

export interface allTransactinoState {
	orderview_value: boolean;
	profitview_value: boolean;
	paginationOrder_value: number;
	paginationProfit_value: number;
	paginationOrder_totalPage: number;
	paginationProfit_totalPage: number;
}

const initialState: allTransactinoState = {
	orderview_value: false,
	profitview_value: false,
	paginationOrder_value: 1,
	paginationProfit_value: 1,
	paginationOrder_totalPage: 1,
	paginationProfit_totalPage: 1,
};

export const allTransactionSlice = createSlice({
	name: 'allTransaction',
	initialState,
	reducers: {
		setAllTransaction_orderview: (state) => {
			state.orderview_value = !state.orderview_value;
		},
		setAllTransaction_profitview: (state) => {
			state.profitview_value = !state.profitview_value;
		},
		setAllTransaction_OrderPagination: (
			state,
			action: PayloadAction<number>
		) => {
			state.paginationOrder_value = action.payload;
		},
		setAllTransaction_ProfitPagination: (
			state,
			action: PayloadAction<number>
		) => {
			state.paginationProfit_value = action.payload;
		},
		setAllTransaction_ProfitTotalPage: (
			state,
			action: PayloadAction<number>
		) => {
			state.paginationProfit_totalPage = action.payload;
		},
		setAllTransaction_OrderTotalPage: (
			state,
			action: PayloadAction<number>
		) => {
			state.paginationOrder_totalPage = action.payload;
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

export const { setAllTransaction_orderview } = allTransactionSlice.actions;

export const { setAllTransaction_profitview } = allTransactionSlice.actions;

export const { setAllTransaction_OrderPagination } =
	allTransactionSlice.actions;

export const { setAllTransaction_ProfitPagination } =
	allTransactionSlice.actions;
export const { setAllTransaction_OrderTotalPage } = allTransactionSlice.actions;
export const { setAllTransaction_ProfitTotalPage } =
	allTransactionSlice.actions;

export const AllTransactionOrderState = (state: AppState) =>
	state.allTransaction.orderview_value;

export const AllTransactionProfitState = (state: AppState) =>
	state.allTransaction.profitview_value;

export const AllTransactinoOrderPaginationState = (state: AppState) =>
	state.allTransaction.paginationOrder_value;

export const AllTransactionProfitPaginationState = (state: AppState) =>
	state.allTransaction.paginationProfit_value;
export const AllTransactionProfitTotalPageState = (state: AppState) =>
	state.allTransaction.paginationProfit_totalPage;
export const AllTransactionOrderTotalPageState = (state: AppState) =>
	state.allTransaction.paginationOrder_totalPage;

export default allTransactionSlice.reducer;
