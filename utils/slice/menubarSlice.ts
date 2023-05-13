import { createSlice } from '@reduxjs/toolkit'

import type { PayloadAction } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'
import { AppState } from '../store'


export interface menubarState {
    menubarState: boolean
}

const initialState:menubarState = {
    menubarState: false
}

export const menubarSlice = createSlice({
    name: 'menubar',
    initialState,
    reducers:{
        setmenubarState: (state, action:PayloadAction<boolean>)=>{
            state.menubarState = action.payload
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

export const {setmenubarState} = menubarSlice.actions

export const MenubarState = (state:AppState) => state.menubar.menubarState

export default menubarSlice.reducer