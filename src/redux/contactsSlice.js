import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import { addContact, deleteContact, fetchContacts } from 'service/getContacts';

const handlePending = state => {
  state.loading = true;
};

const hadleRejected = state => {
  state.loading = false;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchContacts.rejected, hadleRejected)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.contacts = state.contacts.filter(
          item => item.id !== action.payload.id
        );
      })
      .addCase(deleteContact.rejected, hadleRejected)
      .addCase(addContact.fulfilled, (state, action) => {
        return {
          ...state,
          loading: false,
          contacts: [action.payload, ...state.contacts],
        };
      })
      .addCase(addContact.rejected, hadleRejected)
      .addMatcher(
        isAnyOf(fetchContacts, deleteContact, addContact),
        handlePending
      )
      .addMatcher(
        isAnyOf(fetchContacts, deleteContact, addContact),
        hadleRejected
      );
  },
});

const { reducer: contactsReducer } = contactsSlice;
export default contactsReducer;
