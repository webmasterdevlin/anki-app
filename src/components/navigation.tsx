import { Link } from '@tanstack/react-router';

const Navigation = () => {
  return (
    <div className="bg-gray-900 p-4 text-gray-200 shadow-lg">
      <nav className="flex gap-6">
        <Link
          to="/"
          className="transform rounded-md px-6 py-2 text-sm font-medium transition duration-300 ease-in-out hover:scale-110 hover:bg-gray-700"
          activeProps={{
            className: 'font-bold bg-gray-700 scale-100',
          }}
          activeOptions={{ exact: true }}
        >
          Home
        </Link>
        <Link
          to="/norsk"
          className="transform rounded-md px-6 py-2 text-sm font-medium transition duration-300 ease-in-out hover:scale-110 hover:bg-gray-700"
          activeProps={{
            className: 'font-bold bg-gray-700 scale-100',
          }}
        >
          Norsk
        </Link>
        <Link
          to="/english"
          className="transform rounded-md px-6 py-2 text-sm font-medium transition duration-300 ease-in-out hover:scale-110 hover:bg-gray-700"
          activeProps={{
            className: 'font-bold bg-gray-700 scale-100',
          }}
        >
          English
        </Link>
      </nav>
    </div>
  );
};

export default Navigation;
