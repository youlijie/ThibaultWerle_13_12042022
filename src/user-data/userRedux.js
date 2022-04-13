import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice ({
    name: 'user',
    initialState: {
        connected: false, 
        token: null,
        profile : {}
    },
    reducers:{
        login : (state,token) => {
            state.connected = true;
            state.token = token
        },
        logout : (state) => {
            state.connected = false; 
            state.token = null
        },
        profile : (state ,user) => {
            state.profile = user
        }
    }
})
export const {login, logout, profile} = userSlice.actions

export default userSlice.reducer