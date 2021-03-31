import { useContext } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRouter } from './DashboardRouter';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
  const {
    user: { logged },
  } = useContext(AuthContext);
  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            isAuth={logged}
            exact
            path="/login"
            component={LoginScreen}
          />
          <PrivateRoute isAuth={logged} path="/" component={DashboardRouter} />
        </Switch>
      </div>
    </Router>
  );
};
