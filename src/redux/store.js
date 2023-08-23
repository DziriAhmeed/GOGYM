import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userslice/UserSlice'

export const store = configureStore({
  reducer: {
    user:userReducer,
  },
})

