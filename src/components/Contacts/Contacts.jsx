// import { useDispatch, useSelector } from 'react-redux';
import { StyledList } from './Contacts.styled';
// import { deleteContact } from 'redux/contactsSlice';

export const Contacts = () => {
  // const dispatch = useDispatch();
  // const contacts = useSelector(state => state.contacts);

  // const filterText = useSelector(state => state.filter);

  // const visibleContacts = contacts.filter(el =>
  //   el.name.toLowerCase().includes(filterText.toLowerCase())
  // );

  const visibleContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

  return (
    <StyledList>
      {visibleContacts.map(el => (
        <li key={el.id}>
          <span>{el.name}</span> : {el.number}
          {/* <button onClick={() => dispatch(deleteContact(el.id))}>Delete</button> */}
        </li>
      ))}
    </StyledList>
  );
};
