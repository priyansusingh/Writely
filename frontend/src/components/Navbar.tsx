import { Link } from "react-router-dom"

export const Navbar = () =>{
    return <div className="border-b flex justify-between px-10 py-4">
    <Link to={'/'} className="flex flex-col justify-center cursor-pointer font-bold text-2xl">
            Digital Dairy
    </Link>
    <div>
        <Link to={`/signup`}>
            <button type="button" className="mr-4 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 ">Sign up</button>
        </Link>

        <Link to={`/signin`}>
            <button type="button" className="mr-4 text-black bg-white  focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 ">Sign in</button>
        </Link>
    </div>
</div>
}