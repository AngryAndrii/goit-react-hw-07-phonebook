import axios from 'axios';

axios.defaults.baseURL = 'https://650c4d9447af3fd22f676f23.mockapi.io';

export const getContacts = async () => {
  const resp = await axios.get('/contacts');
  console.log(resp);
  return resp;
};
