import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isOpen: false,
}

const SettingSlice = createSlice({
  name: 'setting',
  initialState,
  reducers: {
    closeSetting: (state) => {
      state.isOpen = !state.isOpen
      console.log(state)
    },
  },
})

export const { openSetting, closeSetting } = SettingSlice.actions

export default SettingSlice.reducer
