import ReactDOM from 'react-dom/client';
import { RouterProvider, ErrorComponent, createRouter } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';
import './index.css';

import LogRocket from 'logrocket';
LogRocket.init('gbsta4/anki-app');

// Set up a Router instance
const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  defaultErrorComponent: ({ error }) => <ErrorComponent error={error} />,
});

// Register things for typesafety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById('app')!;

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<RouterProvider router={router} />);
}
