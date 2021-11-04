import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        name: 'classic drone',
        description: "Redefine what's possible",
        camera_quality: 22.00,
        flight_time: 'Approx 20mins',
        max_speed: '140 kph',
        dimensions: '255 x 312 x 127mm',
        weight: 'Approx 795g',
        cost_of_prod: 450.00,
        series: 'DJI FPV Series'
    },
    reducers: {
        chooseName: (state, action) => { state.name = action.payload},
        cost_of_prod: (state,action) => {state.cost_of_prod = action.payload},
        // choosePrice: (state, action) => { state.price = action.payload}
    }
})


// Export Reducer
export const reducer = rootSlice.reducer
export const { chooseName,cost_of_prod } = rootSlice.actions;
