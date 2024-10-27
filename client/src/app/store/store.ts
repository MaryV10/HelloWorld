import { configureStore } from '@reduxjs/toolkit';

import { userSlice } from '@/entities/user';
import { placeSlice } from '@/entities/place';
import { tagSlice } from '@/entities/tag';




export const store = configureStore({
  reducer: {
    
    user: userSlice,
    place: placeSlice,
    tag: tagSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
