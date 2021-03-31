import { Redirect, Route } from 'react-router';
import PropTypes from 'prop-types';

export const PrivateRoute = ({ isAuth, component: Component, ...rest }) => {
  localStorage.setItem('last-page', rest.location.pathname);
  return (
    <Route
      {...rest}
      component={props =>
        isAuth ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

PrivateRoute.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};
