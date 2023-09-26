// import { nanoid } from 'nanoid';
import { createSlice } from '@reduxjs/toolkit';

import { deleteContact, fetchContacts } from 'service/getContacts';

// const contacts = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

// const slice = createSlice({
//   name: 'contacts',
//   initialState: contacts,
//   reducers: {
//     addContact: {
//       reducer(state, action) {
//         state.push(action.payload);
//       },
//       prepare(name, number) {
//         return {
//           payload: {
//             id: nanoid(),
//             name: name,
//             number: number,
//           },
//         };
//       },
//     },
//     deleteContact(state, action) {
//       return state.filter(el => el.id !== action.payload);
//     },
//   },
// });

// export const { addContact, deleteContact } = slice.actions;
// export const contactsReducer = slice.reducer;
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    status: null,
    error: null,
  },
  reducers: {
    // // Виконається в момент старту HTTP-запиту
    // fetchingInProgress(state) {
    //   state.isLoading = true;
    // },
    // // Виконається якщо HTTP-запит завершився успішно
    // fetchingSuccess(state, action) {
    //   state.isLoading = false;
    //   state.error = null;
    //   state.items = action.payload;
    // },
    // // Виконається якщо HTTP-запит завершився з помилкою
    // fetchingError(state, action) {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },
  },
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
