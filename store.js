import { configureStore } from '@reduxjs/toolkit'

import userReducer from './Features/Users/userSlice'
import settingReducer from './Features/Settings/settingSlice'
import taskReducer from './Features/Tasks/Task'

export const store = configureStore({
  reducer: {
    userState: userReducer,
    setting: settingReducer,
    editTask: taskReducer,
  },
})
