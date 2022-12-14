import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Config from '../constants/Config'
import { RootState } from '../store'

interface ConfigState {
  sets: number
  rest: number
  shots: number
  speed: number
  points: string[]
  soundEffect: boolean,
  dynamicSpeed: boolean,
}

const initialState: ConfigState = {
  sets: Config.sets,
  rest: Config.rest,
  shots: Config.shots,
  speed: Config.speed,
  points: Config.points,
  soundEffect: Config.soundEffect,
  dynamicSpeed: Config.dynamicSpeed,
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
    updatePoints: (state, action: PayloadAction<string[]>) => {
      state.points = action.payload
    },
    updateSoundEffect: (state, action: PayloadAction<boolean>) => {
      state.soundEffect = action.payload
    },
    updateDynamicSpeed: (state, action: PayloadAction<boolean>) => {
      state.dynamicSpeed = action.payload
    }
  },
})

export const {
  updateSets,
  updateRest,
  updateShots,
  updateSpeed,
  updatePoints,
  updateSoundEffect,
  updateDynamicSpeed,
} = configSlice.actions
export const selectSets = (state: RootState) => state.config.sets
export const selectRest = (state: RootState) => state.config.rest
export const selectShots = (state: RootState) => state.config.shots
export const selectSpeed = (state: RootState) => state.config.speed
export const selectPoints = (state: RootState) => state.config.points
export const selectSoundEffect = (state: RootState) => state.config.soundEffect
export const selectDynamicSpeed = (state: RootState) => state.config.dynamicSpeed
export default configSlice.reducer
