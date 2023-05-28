/** @format */

import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { AppState } from '../store';
export interface InvoiceState {
	pagination_openinvoice: number;
	pagination_pastInvoice: number;
	pagination_allInvoice: number;
	totalPage_all: number;
	totalPage_open: number;
	totalPage_past: number;
}

const initialState: InvoiceState = {
	pagination_openinvoice: 1,
	pagination_pastInvoice: 1,
	pagination_allInvoice: 1,
	totalPage_all: 1,
	totalPage_open: 1,
	totalPage_past: 1,
};

export const invoiceAndBillSlice = createSlice({
	name: 'billAndInvoice',
	initialState,
	reducers: {
		setInvoiceOpenPagination: (state, action: PayloadAction<number>) => {
			state.pagination_openinvoice = action.payload;
		},
		setInvoicePastPagination: (state, action: PayloadAction<number>) => {
			state.pagination_pastInvoice = action.payload;
		},
		setInvoiceAllPagination: (state, action: PayloadAction<number>) => {
			state.pagination_allInvoice = action.payload;
		},
		setInvoiceAllTotalPage: (state, action: PayloadAction<number>) => {
			state.totalPage_all = action.payload;
		},
		setInvoiceOpenTotalPage: (state, action: PayloadAction<number>) => {
			state.totalPage_open = action.payload;
		},
		setInvoicePastTotalPage: (state, action: PayloadAction<number>) => {
			state.totalPage_past = action.payload;
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

export const { setInvoiceOpenPagination } = invoiceAndBillSlice.actions;

export const { setInvoicePastPagination } = invoiceAndBillSlice.actions;

export const { setInvoiceAllPagination } = invoiceAndBillSlice.actions;

export const { setInvoiceAllTotalPage } = invoiceAndBillSlice.actions;
export const { setInvoiceOpenTotalPage } = invoiceAndBillSlice.actions;
export const { setInvoicePastTotalPage } = invoiceAndBillSlice.actions;

export const openInvoicePagination = (state: AppState) =>
	state.billAndInvoice.pagination_openinvoice;
export const pastInvoicePagination = (state: AppState) =>
	state.billAndInvoice.pagination_pastInvoice;
export const allInvoicePagination = (state: AppState) =>
	state.billAndInvoice.pagination_allInvoice;
export const openInvoiceTotalPage = (state: AppState) =>
	state.billAndInvoice.totalPage_open;
export const pastInvoiceTotalPage = (state: AppState) =>
	state.billAndInvoice.totalPage_past;
export const allInvoiceTotalPage = (state: AppState) =>
	state.billAndInvoice.totalPage_all;

export default invoiceAndBillSlice.reducer;
