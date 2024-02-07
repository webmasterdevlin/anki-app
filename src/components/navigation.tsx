import { Link } from '@tanstack/react-router';
import { FaGithub } from 'react-icons/fa';

const Navigation = () => {
  return (
    <nav className="sticky top-0 z-10 bg-gray-800" aria-label="Main navigation">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0 text-emerald-300" aria-label="inmeta logo">
              inmeta
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline gap-2 space-x-4">
                <Link
                  to="/"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  aria-current="page"
                >
                  Home
                </Link>
                <Link
                  to="/norsk"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Norsk
                </Link>
                <Link
                  to="/english"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  English
                </Link>
              </div>
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
