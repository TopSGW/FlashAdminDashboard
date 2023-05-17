import { createSlice } from '@reduxjs/toolkit'

import type { PayloadAction } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'
import { AppState } from '../store'


export interface overviewAffiliatorState {
    mode: boolean,
    statisticsmode: boolean
}

const initialState:overviewAffiliatorState = {
    mode: false,
    statisticsmode:false
}

export const overviewAffiliatorSlice = createSlice({
    name: 'overviewAffiliator',
    initialState,
    reducers:{
        setOverviewAffiliatorState: (state, action:PayloadAction<boolean>)=>{
            state.mode = action.payload
        },
        setStatisticsAffiliatorState: (state, action:PayloadAction<boolean>) =>{
            state.statisticsmode = action.payload
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

export const {setOverviewAffiliatorState} = overviewAffiliatorSlice.actions

export const {setStatisticsAffiliatorState} = overviewAffiliatorSlice.actions

export const OverviewAffiliator_State = (state:AppState) => state.overviewAffiliator.mode

export const StatiSticsAffiliator_State  = (state:AppState) => state.overviewAffiliator.statisticsmode

export default overviewAffiliatorSlice.reducer