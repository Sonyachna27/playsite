
import { configureStore, createSlice } from '@reduxjs/toolkit';
const initialState = {
    name: 'navigation',
    navigation: [
      {
      currentPath: '/playsite/about',
    },
      {
      currentPath: '/playsite/portfolio',
    },
      {
      currentPath: '/playsite/news',
    },
      {
      currentPath: '/playsite/contact',
    },     
  ]}
  
  const navigationSlice = createSlice({
    name: 'step',
    initialState,
    reducers: {
      setCurrentPath: (state, action) => {
        state.navigation.forEach((item) => {
          item.currentPath = action.payload;
        });
      },
    },
    
  });
  
  export const { setCurrentPath } = navigationSlice.actions;
  
 export const navigationReducer = navigationSlice.reducer;
 