// import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { StyledList } from './Contacts.styled';
import { deleteContact, fetchContacts } from 'service/getContacts';
import { useDispatch, useSelector } from 'react-redux';
// import { deleteContact } from 'redux/contactsSlice';

export const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);

  // const filterText = useSelector(state => state.filter);

  // const visibleContacts = contacts.filter(el =>
  //   el.name.toLowerCase().includes(filterText.toLowerCase())
  // );

  useEffect(() => {
    dispatch(fetchContacts());
  }, []);

  return (
    <StyledList>
      {contacts.map(el => (
        <li key={el.id}>
          <span>{el.name}</span> : {el.phone}
          <button onClick={() => dispatch(deleteContact(el.id))}>Delete</button>
        </li>
      ))}
    </StyledList>
  );
};
