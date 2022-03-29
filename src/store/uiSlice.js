import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  drawerOpen: false,
  modalOpen: false,
  productOpen: false,
  filter: null,
  productModalData: null,
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleDrawer(state) {
      state.drawerOpen = !state.drawerOpen
    },
    openModal(state) {
      state.modalOpen = true
    },
    closeModal(state) {
      state.modalOpen = false
    },
    setFilter(state, action) {
      state.filter = action.payload
    },
    openProductModal(state, action) {
      state.productOpen = true
      state.productModalData = action.payload
    },
    closeProductModal(state) {
      state.productOpen = false
      state.productModalData = null
    },
  },
})

export const uiActions = uiSlice.actions

export default uiSlice.reducer
