import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/Images/logo.png"
const Navbar = () => {
    const Navlinks = <>
        <li className="font-bold text-lg">
            <NavLink to={'/'} className={({ isActive }) =>
                isActive
                    ? "border-black border-b-2 px-1 py-2"
                    : ""
            }>Home</NavLink>
        </li>
        <li className="font-bold text-lg">
            <NavLink to={'/Rooms'} className={({ isActive }) =>
                isActive
                    ? "border-black border-b-2 px-1 py-2"
                    : ""
            }>Rooms</NavLink>
        </li>
        <li className="font-bold text-lg">
            <NavLink to={'/myroom'} className={({ isActive }) =>
                isActive
                    ? "border-black border-b-2 px-1 py-2"
                    : ""
            }>My Room</NavLink>
        </li>
    </>
    return (
        <div className="bg-black bg-opacity-75 py-2">
            <div className="drawer max-w-7xl mx-auto">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="w-full navbar ">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className="flex-1 px-2 mx-2">
                            <img src={logo} alt="logo" />
                        </div>
                        <div className="flex-none hidden lg:block">
                            <ul className="flex space-x-4 text-white">
                                {Navlinks}
                            </ul>
                        </div>
                        <Link to={'/login'}><button className="ml-10 text-white font-medium bg-[#a28441] px-4 py-1 rounded-md">Login</button></Link>
                    </div>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-white">
                        {Navlinks}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;