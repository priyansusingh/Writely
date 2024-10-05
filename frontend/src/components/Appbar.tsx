import { Link } from "react-router-dom";
import { Avatar } from "./BlogCard";

export const Appbar = () => {
    return (
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 border-b flex justify-between px-10 py-4">
            <Link to="/blogs" className="flex flex-col justify-center cursor-pointer font-bold text-2xl text-white">
                Writely
            </Link>
            <div className="flex items-center">
                <Link to="/publish">
                    <button
                        type="button"
                        className="mr-4 text-white bg-gradient-to-r from-green-400 to-green-600 hover:bg-gradient-to-l focus:outline-none focus:ring-4 focus:ring-green-300 font-semibold rounded-lg text-sm px-5 py-3 transition-all duration-300 shadow-lg transform hover:scale-105"
                    >
                        New
                    </button>
                </Link>

                <Avatar size="big" name="Harkirat" />

                <Link to="/" className="ml-4">
                    <button
                        type="button"
                        className="text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 transition-all duration-300"
                    >
                        Logout
                    </button>
                </Link>
            </div>
        </div>
    );
};
