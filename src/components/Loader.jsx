import { Circles } from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import { selectLoading } from 'redux/selectors';

export const Loader = () => {
  const isLoading = useSelector(selectLoading);
  console.log(isLoading);
  return (
    <Circles
      visible={isLoading}
      height="80"
      width="80"
      color="#4fa94d"
      ariaLabel="circles-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
};
