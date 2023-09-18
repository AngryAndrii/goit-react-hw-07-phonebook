import { useDispatch, useSelector } from 'react-redux';
import { StyledList } from './Contacts.styled';
import { deleteContact } from 'redux/contactsSlice';

export const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);

  const filterText = useSelector(state => state.filter);

  const visibleContacts = contacts.filter(el =>
    el.name.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <StyledList>
      {visibleContacts.map(el => (
        <li key={el.id}>
          <span>{el.name}</span> : {el.number}
          <button onClick={() => dispatch(deleteContact(el.id))}>Delete</button>
        </li>
      ))}
    </StyledList>
  );
};
