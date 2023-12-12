import { createSlice } from '@reduxjs/toolkit'

interface initialStateProps {
  colorModalForm: 'lilac' | 'mint' | 'sky' | 'pinky';
  isModalOpen: boolean;
}

const initialState: initialStateProps = {
  colorModalForm: 'lilac',
  isModalOpen: false
}

const buyFormSlice = createSlice({
  name: 'buyForm',
  initialState,
  reducers: {
    setColorModalForm(state, action) {
      state.colorModalForm = action.payload;
    },
    setStateModalForm(state, action) {
      state.isModalOpen = action.payload;
    },
    toggleModalForm(state) {
      state.isModalOpen = !state.isModalOpen;
    },
  }
})

export const { setColorModalForm, setStateModalForm, toggleModalForm } = buyFormSlice.actions;

export default buyFormSlice.reducer;