import { createSlice } from '@reduxjs/toolkit';

// const filter = '';

// const slice = createSlice({
//   name: 'filter',
//   initialState: filter,
//   reducers: {
//     setFilter(state, action) {
//       return action.payload;
//     },
//   },
// });

// export const { setFilter } = slice.actions;
// export const filterReducer = slice.reducer;

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter(state, action) {
      return action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
