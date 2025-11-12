import { Link, Navigate } from 'react-router-dom';
import { AuthForm } from '../domain/auth/components/AuthForm';
import { useAuthQuery } from '../domain/auth/hooks/useAuthQuery';
import ROUTES from '../domain/router/constants/ROUTES';
import { setErrorMessage } from '../domain/error/features/setErrorMessage';

export function Login() {
  const { isFetched, isError, error } = useAuthQuery();

  // FIXME: isLoading state
  if (isError) {
    setErrorMessage(error);
    return <Navigate to={ROUTES.error} />;
  }

  if (isFetched) {
    return <Navigate to={ROUTES.cities} />;
  }

  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to={ROUTES.cities}>
                <img
                  className="header__logo"
                  src="img/logo.svg"
                  alt="6 cities logo"
                  width={81}
                  height={41}
                />
              </Link>
            </div>
          </div>
        </div>
      </header>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <AuthForm />
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to={ROUTES.cities}>
                <span>Amsterdam</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
