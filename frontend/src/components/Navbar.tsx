import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 border-b border-gray-200 shadow-lg flex justify-between px-10 py-4">
            <Link to="/" className="flex flex-col justify-center cursor-pointer font-bold text-2xl text-white">
               Writely
            </Link>
            <div className="flex items-center">
                <Link to="/signup">
                    <button
                        type="button"
                        className="mr-4 text-white bg-gradient-to-r from-green-400 to-green-600 focus:outline-none focus:ring-4 focus:ring-green-300 font-semibold rounded-lg text-sm px-5 py-3 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-green-500"
                    >
                        Sign up
                    </button>
                </Link>

                <Link to="/signin">
                    <button
                        type="button"
                        className="mr-4 text-black bg-white border-2 border-gray-300 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-3 transition-all duration-300"
                    >
                        Sign in
                    </button>
                </Link>
            </div>
        </div>
    );
};
