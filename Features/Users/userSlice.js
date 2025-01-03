import { createSlice } from '@reduxjs/toolkit'
import { ToastContainer, toast } from 'react-toastify'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { BaseURL } from '../../Utils/BaseUrl'
import axios from 'axios'
import { act } from 'react'

export const getUserDetails = createAsyncThunk(
  'user/getUserDetails',
  async () => {
    try {
      const response = await axios.get(`/api/v1/users/showMe`)

      return response.data
    } catch (error) {
      console.log(error)
      const errorMsg = error?.response?.data?.msg
      console.log(errorMsg)
    }
  }
)

const initialState = {
  user: {},
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      let user = action.payload.user
      state.user = user
      console.log(state.user)
    },
    logoutUser: (state, action) => {
      state.user = null
      toast.success('You have successfully logged out')
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUserDetails.fulfilled, (state, action) => {
      state.user = action.payload.user
      console.log(state.user)
    })
  },
})

export const { loginUser, logoutUser } = userSlice.actions

export default userSlice.reducer
