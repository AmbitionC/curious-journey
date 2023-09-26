import { Navigate, Outlet, useLocation } from '@umijs/max';

const Auth = () => {
  const location = useLocation();

  if (localStorage.getItem('token')) {
    return <Outlet />;
  } else {
    return (
      <Navigate
        to={'/?login=true'}
        state={{ pathname: location.pathname, search: location.search }}
        replace={true}
      />
    );
  }
};

export default Auth;
