import { configureStore } from "@reduxjs/toolkit";
import configReducer from './screens/configSlice'
import persist from "./utils/persist";

const store = configureStore({
  reducer: {
    config: configReducer
  }
})

// persist store to local storage
store.subscribe(() => {
  persist.saveState(store.getState())
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
