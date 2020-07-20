import React from 'react';
import {
  RouteProps as RouteDOMProps,
  Route as ReactDOMRoute,
  Redirect,
} from 'react-router-dom';
import { useAuth } from '../hooks/Auth';

interface RouteProps extends RouteDOMProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}
// auth / pag
// T   / T : Acessar component
// F   / F : acessar component
// T / F : p/ dash
// F / T: p/ o login

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { user } = useAuth();
  console.log(user);

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return !!user === isPrivate ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/dashboard',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default Route;
