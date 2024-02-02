import { Link } from '@tanstack/react-router';

const Navigation = () => {
  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">inmeta</div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  to="/"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  activeProps={{
                    className: 'bg-gray-900 text-white',
                  }}
                  activeOptions={{ exact: true }}
                >
                  Home
                </Link>
                <Link
                  to="/norsk"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  activeProps={{
                    className: 'bg-gray-900 text-white',
                  }}
                >
                  Norsk
                </Link>
                <Link
                  to="/english"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  activeProps={{
                    className: 'bg-gray-900 text-white',
                  }}
                >
                  English
                </Link>
                {/* More navigation items */}
              </div>
            </div>
          </div>
          {/* Additional elements like search/profile/etc. */}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
