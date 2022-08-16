import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../store"

interface ConfigState {
  sets: number,
  rest: number,
  shots: number,
  speed: number,
}

const initialState: ConfigState = {
  sets: 3,
  rest: 10,
  shots: 12,
  speed: 2
}

export const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    updateSets: (state, action: PayloadAction<number>) => {
      state.sets = action.payload
    },
    updateRest: (state, action: PayloadAction<number>) => {
      state.rest = action.payload
    },
    updateShots: (state, action: PayloadAction<number>) => {
      state.shots = action.payload
    },
    updateSpeed: (state, action: PayloadAction<number>) => {
      state.speed = action.payload
    },
  }
})

export const { updateSets, updateRest, updateShots, updateSpeed } = configSlice.actions
export const selectSets = (state: RootState) => state.config.sets
export const selectRest = (state: RootState) => state.config.rest
export const selectShots = (state: RootState) => state.config.shots
export const selectSpeed = (state: RootState) => state.config.speed
export default configSlice.reducer
