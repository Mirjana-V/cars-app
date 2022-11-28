import { createSlice } from "@reduxjs/toolkit";

export const carSlice = createSlice({
    name: 'cars',
    initialState: {all: []},

    reducers: {
        setAll: (state, action) => {
            state.all = action.payload
        }
    }

});

export const {
    setAll,
} = carSlice.actions;

 export default carSlice.reducer;

//ovde treba dodoati akcije za setCars
//ovde samo setujemo, a menjamo u AppCars
//appCars ce dispecovati akciju