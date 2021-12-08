import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useSelector } from 'react-redux';
import { useRoutes } from 'react-router-dom';
import LoadingMask from 'components/LoadingMask';
import { authRoutes, noAuthRoutes, validateEmailRoute } from './routes';
import MessageCenter from 'components/MessageCenter';

const switchRoute = (auth) => {
  if(!auth.isAuth) return noAuthRoutes;
  if (auth.user.status === 0) return validateEmailRoute;
  return authRoutes;
};

const App = () => {
  const auth = useSelector(({ auth }) => auth);
  const routers = switchRoute(auth);
  const routing = useRoutes(routers);
  
  return (
    <div>
      <CssBaseline />
      <LoadingMask />
      <MessageCenter />
      {routing}
    </div>
  );
};

export default App;
