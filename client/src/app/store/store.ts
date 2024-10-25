import { configureStore } from '@reduxjs/toolkit';

import { userSlice } from '@/entities/user';
import { placeSlice } from '@/entities/place';




export const store = configureStore({
  reducer: {
    
    user: userSlice,
    place: placeSlice

  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
