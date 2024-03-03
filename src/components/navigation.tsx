import { Link } from '@tanstack/react-router';
import { FaGithub } from 'react-icons/fa';
import { root } from '../utils/routePaths';

const Navigation = () => {
  return (
    <nav className="sticky top-0 z-10 bg-gray-800" aria-label="Main navigation">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 text-emerald-300" aria-label="inmeta logo">
              inmeta
            </Link>
            <div className="ml-10 flex items-baseline gap-2 space-x-4">
              {root.map(([to, label]) => {
                return (
                  <Link
                    to={to}
                    className="hidden rounded-md px-3 py-2 text-sm capitalize  text-gray-300 hover:bg-gray-700 hover:text-white md:block"
                    aria-current="page"
                    activeProps={{ className: 'font-bold' }}
                  >
                    {label}
                  </Link>
                );
              })}
            </div>
          </div>
          <div>
            <a
              href="https://github.com/webmasterdevlin/anki-app"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View source on GitHub"
              className="text-gray-300 hover:text-white"
            >
              <FaGithub className="h-6 w-6" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
