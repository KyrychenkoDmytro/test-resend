import { configureStore } from '@reduxjs/toolkit';
import buyFormReducer from './features/users/buyFormSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      buyForm: buyFormReducer
    }
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']