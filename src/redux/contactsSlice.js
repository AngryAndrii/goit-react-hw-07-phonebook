import { createSlice } from '@reduxjs/toolkit';

import { addContact, deleteContact, fetchContacts } from 'service/getContacts';

const initialState = {
  contacts: [],
  loading: false,
  error: null,
};

const handlePending = state => {
  state.loading = true;
};

const handleRejected = state => {
  state.loading = false;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.contacts = action.payload;
        state.error = null;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.contacts = state.contacts.filter(
          item => item.id !== action.payload.id
        );
      })
      .addCase(deleteContact.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        return {
          ...state,
          loading: false,
          contacts: [action.payload, ...state.contacts],
        };
      })
      .addCase(addContact.rejected, handleRejected);
  },
});

const { reducer: contactsReducer } = contactsSlice;
export default contactsReducer;
