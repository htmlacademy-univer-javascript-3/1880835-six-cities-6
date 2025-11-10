import { Navigate } from 'react-router-dom';
import { useAuthStatus } from '../../auth';
import routes from '../constants/ROUTES';

export function PrivateRoute({ children }: { children: JSX.Element }) {
  const auth = useAuthStatus();
  return auth ? children : <Navigate to={routes.login} />;
}
