/** @format */

import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { AppState } from '../store';

export interface overAffiliatorState {
	see_all_value: boolean;
	pagination_value: number;
	total_page: number;
}

const initialState: overAffiliatorState = {
	see_all_value: false,
	pagination_value: 1,
	total_page: 1,
};

export const overAffiliatorSlice = createSlice({
	name: 'overAffiliator',
	initialState,
	reducers: {
		setOverAffiliator_SeeAllViewValue: (
			state,
			action: PayloadAction<boolean>
		) => {
			state.see_all_value = action.payload;
		},
		setOverAffiliator_PaginationValue: (
			state,
			action: PayloadAction<number>
		) => {
			state.pagination_value = action.payload;
		},
		setOverAffiliator_TotalPage: (state, action: PayloadAction<number>) => {
			state.total_page = action.payload;
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

export const { setOverAffiliator_PaginationValue } =
	overAffiliatorSlice.actions;

export const { setOverAffiliator_SeeAllViewValue } =
	overAffiliatorSlice.actions;
export const { setOverAffiliator_TotalPage } = overAffiliatorSlice.actions;

export const OverAffiliator_seeAllState = (state: AppState) =>
	state.overAffiliator.see_all_value;

export const OverAffiliator_paginationState = (state: AppState) =>
	state.overAffiliator.pagination_value;
export const OverAffiliator_TotalPageState = (state: AppState) =>
	state.overAffiliator.total_page;

export default overAffiliatorSlice.reducer;
