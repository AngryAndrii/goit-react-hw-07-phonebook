import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const changeFilter = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <>
      <input
        type="text"
        placeholder="search in phonebook"
        onChange={changeFilter}
      />
    </>
  );
};
