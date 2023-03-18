import React, { memo, useCallback } from 'react';
import { Route, Routes, type RouteProps } from 'react-router-dom';
import { routeConfig } from './routeConfig';

const AppRouter = () => {
  const renderWithWrapper = useCallback((route: RouteProps) => {
    return (
        <Route key={route.path}
                   path={route.path}
                   element={route.element}/>
    );
  }, []);
  return (
      <Routes>
          {Object.values(routeConfig).map(renderWithWrapper)}
      </Routes>
  );
};

export default memo(AppRouter);
