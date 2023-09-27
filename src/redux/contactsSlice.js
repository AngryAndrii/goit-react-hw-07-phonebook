import { createSlice } from '@reduxjs/toolkit';

import { addContact, deleteContact, fetchContacts } from 'service/getContacts';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    status: null,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.status = 'resolved';
        state.contacts = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {})
      .addCase(deleteContact.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.status = 'resolved';
        state.contacts = state.contacts.filter(
          item => item.id !== action.payload.id
        );
      })
      .addCase(addContact.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(addContact.fulfilled, (state, action) => {
        return {
          ...state,
          status: 'resolved',
          contacts: [action.payload, ...state.contacts],
        };
      });
  },
});

//   {
//     [fetchContacts.pending]: (state, action) => {
//       state.status = 'loading';
//       state.error = null;
//     },
//     [fetchContacts.fulfilled]: (state, action) => {
//       state.status = 'resolved';
//       state.todos = action.payload;
//     },
//     [fetchContacts.rejected]: (state, action) => {},
//   },
// });

// export const { fetchingInProgress, fetchingSuccess, fetchingError } =
//   contactsSlice.actions;

const { reducer: contactsReducer } = contactsSlice;
export default contactsReducer;
