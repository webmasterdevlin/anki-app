import { createRootRoute, Outlet } from '@tanstack/react-router';
import { lazy, Suspense } from 'react';
import Navigation from '../components/navigation';

const TanStackRouterDevtools =
  process.env.NODE_ENV === 'production'
    ? () => {
        return null;
      }
    : lazy(() => {
        return import('@tanstack/router-devtools').then(res => {
          return {
            default: res.TanStackRouterDevtools,
          };
        });
      });

export const Route = createRootRoute({
  component: () => {
    return (
      <>
        <Navigation />
        <Outlet />
        <Suspense>
          <TanStackRouterDevtools />
        </Suspense>
      </>
    );
  },
});
