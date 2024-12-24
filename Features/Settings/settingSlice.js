import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isOpen: false,
  isSelectedText: 'Home',
  isNavOpen: false,
}

const SettingSlice = createSlice({
  name: 'setting',
  initialState,
  reducers: {
    closeSetting: (state) => {
      state.isOpen = !state.isOpen
      console.log(state)
    },
    selectText: (state, action) => {
      console.log(action.payload)

      state.isSelectedText = action.payload
    },
    closeNav: (state) => {
      state.isNavOpen = !state.isNavOpen
    },
  },
})

export const { closeSetting, selectText, closeNav } = SettingSlice.actions

export default SettingSlice.reducer
