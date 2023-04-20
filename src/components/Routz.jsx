import { useSelector } from 'react-redux';
import { isLogin } from '../redux/selector';
import { Navigate } from 'react-router-dom';

export const RestrictedRoute = ({ component, redirectTo }) => {
  const login = useSelector(isLogin);

  return login ? <Navigate to={redirectTo} /> : component;
};
