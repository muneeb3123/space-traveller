import { configureStore } from "@reduxjs/toolkit";
import rocketreducer from './Redux/Rockets/RocketSlice'

const store = configureStore({
    reducer: {
        mission: rocketreducer,
    }
})

export default store;