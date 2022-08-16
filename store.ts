import { configureStore } from "@reduxjs/toolkit";
import configReducer from './screens/configSlice'

const store = configureStore({
  reducer: {
    config: configReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
