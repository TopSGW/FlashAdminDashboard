/** @format */

import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { AppState } from '../store';

export interface overviewState {
	see_all_value: boolean;
	pagination_value: number;
	see_all_totalPage: number;
}

const initialState: overviewState = {
	see_all_value: false,
	pagination_value: 1,
	see_all_totalPage: 1,
};

export const overviewSlice = createSlice({
	name: 'overview',
	initialState,
	reducers: {
		setOverview_SeeAllViewValue: (state, action: PayloadAction<boolean>) => {
			state.see_all_value = action.payload;
		},
		setOverview_PaginationValue: (state, action: PayloadAction<number>) => {
			state.pagination_value = action.payload;
		},
		setOverview_SeeAllTotalPage: (state, action: PayloadAction<number>) => {
			state.see_all_totalPage = action.payload;
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

export const { setOverview_PaginationValue } = overviewSlice.actions;

export const { setOverview_SeeAllViewValue } = overviewSlice.actions;
export const { setOverview_SeeAllTotalPage } = overviewSlice.actions;

export const Overview_seeAllState = (state: AppState) =>
	state.overview.see_all_value;
export const Overview_paginationState = (state: AppState) =>
	state.overview.pagination_value;
export const Overview_SeeAllTotalPage = (state: AppState) =>
	state.overview.see_all_totalPage;

export default overviewSlice.reducer;
