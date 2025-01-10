import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const editTask = createAsyncThunk(
  'editTask',
  async ({ id, completed }) => {
    try {
      const response = await axios.patch(`/api/v1/tasks/${id}`, {
        completed: completed,
      })
      console.log(response)
      // const data = {
      //   name: response.data.tasks.name,
      //   completed: response.data.tasks.completed,
      // }
      return response.data
    } catch (error) {
      const errorMsg = error.response.data.msg
      console.log(errorMsg)
    }
  }
)

const initialState = {
  editTask: [],
}

const tasksSlice = createSlice({
  name: 'Tasks',
  initialState,
  reducers: {
    getUpdatedTask: (state, action) => {
      // const id = action.payload
      // const updatedIdtask = state.editTask.find((i) => i._id === id)
      // console.log(updatedIdtask)
      state.editTask = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(editTask.fulfilled, (state, action) => {
      state.editTask = action.payload.tasks
      console.log(state)
    })
  },
})
export const { getUpdatedTask } = tasksSlice.actions
export default tasksSlice.reducer

// const handleClick = async () => {
//   const id = updatedTaskReal._id
//   try {
//     const response = await axios.delete(`/api/v1/tasks/${id}`)
//     console.log(response)
//     toast.success(response.data.msg)
//     return navigate('/dashboard')
//   } catch (error) {
//     const errorMsg = error.response.data.msg
//     console.log(errorMsg)
//   }
// }
