import { createSlice } from '@reduxjs/toolkit'
import { ToastContainer, toast } from 'react-toastify'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { BaseURL } from '../../Utils/BaseUrl'
import axios from 'axios'

// export const getUserDetails = createAsyncThunk(
//   'user/getUserDetails',
//   async () => {
//     try {
//       const response = await axios.get(`${BaseURL}api/v1/users/showMe`)
//       console.log(response.data)
//       return response.data
//     } catch (error) {
//       console.log(error)
//       const errorMsg = error?.response?.data?.msg
//       console.log(errorMsg)
//     }
//   }
// )

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
  // extraReducers: (builder) => {
  //   builder.addCase(user / getUserDetails.fulfilled, async (state, action) => {
  //     state.user = action.payload.user
  //     console.log(state.user)
  //   })
  // },
})

export const { loginUser, logoutUser } = userSlice.actions

export default userSlice.reducer
