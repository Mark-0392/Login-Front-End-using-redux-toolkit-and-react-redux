import { createSlice } from '@reduxjs/toolkit'
import { ToastContainer, toast } from 'react-toastify'

const initialState = {
  user: { userName: 'Danny' },
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      const user = action.payload.user
      state.user = user
      console.log(state.user)
    },
    logoutUser: (state, action) => {
      state.user = null
      toast.success('You have successfully logged out')
    },
  },
})

export const { loginUser, logoutUser } = userSlice.actions

export default userSlice.reducer
