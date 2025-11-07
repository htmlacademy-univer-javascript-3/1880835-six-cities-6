import { Navigate } from 'react-router-dom';
import { useAuth } from '../../auth';
import routes from '../constants/ROUTES';

export function PrivateRoute({ children }: { children: JSX.Element }) {
  const auth = useAuth();
  return auth ? children : <Navigate to={routes.login} />;
}
