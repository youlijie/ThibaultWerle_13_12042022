import { configureStore } from '@reduxjs/toolkit'
import user from '../user-data/userRedux.js'
export const store = configureStore({
  reducer: {
   userData : user
  }
})
