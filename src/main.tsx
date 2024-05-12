import { RouterProvider, ErrorComponent, createRouter } from '@tanstack/react-router';
import LogRocket from 'logrocket';
import ReactDOM from 'react-dom/client';
import { routeTree } from './routeTree.gen';

import './index.css';
import 'react-toastify/dist/ReactToastify.css';
// LogRocket.init('gbsta4/anki-app');

// Set up a Router instance
const router = createRouter({
  defaultErrorComponent: ({ error }) => {
    return <ErrorComponent error={error} />;
  },
  defaultPreload: 'intent',
  routeTree,
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
