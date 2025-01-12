import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name:"app",
    initialState:{
        ismenuOpen: true,
    },
    reducers:{
        toggleMenu: (state) =>{
            state.ismenuOpen = !state.ismenuOpen;
        },
        collapseMenu:(state) =>{
            state.ismenuOpen = false;
        }

    }
});

export const {toggleMenu, collapseMenu} = appSlice.actions;
export default appSlice.reducer;