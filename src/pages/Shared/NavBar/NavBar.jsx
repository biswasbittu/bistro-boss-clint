import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const navOption = (
    <>
      <li className="text-xl">
        <NavLink to='/' 
        style={isActive => ({
          color: isActive ? "#EEFF25" : "white",
          backgroundColor:isActive ?"transparent":""
        })}>Home</NavLink>
      </li>

      <li>
        <a>Item 3</a>
      </li>
      <li>
        <a>Item 3</a>
      </li>
      
      <li className="text-xl">
        <NavLink to='/menu' 
        
        style={isActive => ({
          color: isActive?"#EEFF25" : "white",
          backgroundColor:isActive ?"transparent":""
        })}>Our Menu</NavLink>
      </li>
      <li className="text-xl">
        <NavLink to='/order/salad' 
        
        style={isActive => ({
          color: isActive ? "#EEFF25" : "white",
          backgroundColor:isActive ?"transparent":""
        })}>Order Food</NavLink>
      </li>
      <li>
        <a>Item 3</a>
      </li>
    </>
  );

  return (
    <>
      <div className="navbar fixed z-50  md:flex justify-between px-6 nav-bg max-w-screen-2xl boss-bg text-white md:py-4 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOption}
            </ul>
          </div>
          <div className="text-white">
            <p className=" md:text-2xl font-bold font-[Cinzel]">BISTRO BOSS</p>
            <p className="normal-case font-[Cinze] tracking-widest font-semibold md:text-xl text-center">
              Restaurant
            </p>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOption}</ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
