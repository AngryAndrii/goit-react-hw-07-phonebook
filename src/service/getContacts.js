import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://650c4d9447af3fd22f676f23.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const resp = await axios.get('/contacts');
    return resp.data;
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async contactId => {
    const resp = await axios.delete(`/contacts/${contactId}`);
    return resp.data;
  }
);

// export const addContact = createAsyncThunk(
//   'contacts/addContact',
//   async contact => {
//     const resp = await axios.post(`/contacts`, contact);
//     return resp;
//   }
// );

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', contact);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
