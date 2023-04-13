import { createSlice } from '@reduxjs/toolkit'

import type { PayloadAction } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'
import { AppState } from '../store'


export interface overviewState {
    see_all_value: boolean,
    pagination_value: number 
}

const initialState: overviewState = {
    see_all_value: false,
    pagination_value: 1
}

export const overviewSlice = createSlice({
    name: 'overview',
    initialState,
    reducers:{
        setOverview_SeeAllViewValue:(state) =>{
            state.see_all_value = !state.see_all_value
        },
        setOverview_PaginationValue:(state, action:PayloadAction<number>) =>{
            state.pagination_value = action.payload
        }
    },
    extraReducers: {
        [HYDRATE]:(state, action) =>{
            return{
                ...state,
                ...action.payload
            }
        }
    }
})

export const {setOverview_PaginationValue} = overviewSlice.actions

export const {setOverview_SeeAllViewValue} = overviewSlice.actions

export const Overview_seeAllState = (state:AppState) => state.overview.see_all_value

export const Overview_paginationState = (state:AppState) => state.overview.pagination_value

export default overviewSlice.reducer