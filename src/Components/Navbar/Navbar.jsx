import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/Images/logo.png"
import { useContext } from "react";
import { authContext } from "../../Provider/AuthProvider/AuthProvider";
const Navbar = () => {
    const {user, logOut} = useContext(authContext);

    const handelLogOut = () =>{
        logOut()
        .then()
        .catch()
    }
    const Navlinks = <>
        <li className="font-bold text-lg">
            <NavLink to={'/'} className={({ isActive }) =>
                isActive
                    ? "border-black border-b-2 px-1 py-2"
                    : ""
            }>Home</NavLink>
        </li>
        <li className="font-bold text-lg">
            <NavLink to={'/rooms'} className={({ isActive }) =>
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
        <div className="bg-black py-2">
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
                        {
                            user ?
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full border-black border-2">
                                        <img src={user.photoURL} />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="mt-3 z-[1] p-3 shadow  menu-sm dropdown-content bg-base-100 rounded-box w-52 flex flex-col text-end">
                                    <li><p className="text-lg font-semibold">{user.displayName}</p></li>
                                    <li><p className="text-md font-semibold">{user.email}</p></li>
                                    <li className="self-end"><Link onClick={handelLogOut} className="text-white font-medium bg-[#a28441] px-4 py-2 rounded-md">Logout</Link></li>
                                </ul>
                            </div>
                            :<Link to={'/login'}><button className="ml-10 text-white font-medium bg-[#a28441] px-4 py-2 rounded-md">Login</button></Link>
                        }
                        
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