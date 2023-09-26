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
