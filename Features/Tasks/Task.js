import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  getSingleTask: [],
}

const tasksSlice = createSlice({
  name: 'Tasks',
  initialState,
  reducers: {
    getSingleTask: (state, action) => {
      state.getSingleTask = { ...action.payload }
    },
  },
})
