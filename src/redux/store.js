import {
  configureStore,
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'service/getContacts';
import contactsReducer from './contactsSlice';
// import { filterReducer } from './filterSlice';

// export const store = configureStore({
//   reducer: {
//     contacts: contactsReducer,
//     filter: filterReducer,
//   },
// });

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});

// const dispatch = useDispatch();
// const contacts = useSelector(state => state.contacts);
