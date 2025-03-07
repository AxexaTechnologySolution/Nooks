import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <p className="text-xl text-gray-600 mt-2">Page Not Found</p>
      <p className="text-md text-gray-500 mt-4">
        The page you are looking for does not exist.
      </p>
      <Link to={"/"} className="mt-6 px-6 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition">
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
