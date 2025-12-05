import { MemoryRouter } from 'react-router-dom';
import { AppRoutes } from '../../../components/app-routes';
import { InitialEntry } from 'history';

export function MockRouter({
  initialEntries,
}: {
  initialEntries?: InitialEntry[];
}) {
  return (
    <MemoryRouter initialEntries={initialEntries}>
      <AppRoutes />
    </MemoryRouter>
  );
}
