import React from 'react';
import logo from "../assets/logo.png";
import './Navbar.css';

const Navbar = () => {
  return (
    <div className=''>
      <div className="navbar bg-white fixed z-50">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52 uppercase ">
              <li><a href='/#products'>Products</a></li>
              <li><a href='/#offer'>Offer</a></li>
              <li><a href='/#review'>Review</a></li>
              <li><a href='/#getquote'>Get Quote</a></li>
            </ul>
          </div>
          <a href='/' className="  normal-case text-xl lg:pl-10">
            <img className='' width={100} src={logo} alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal uppercase  p-0">
            <li><a href='/#products'>Products</a></li>
            <li><a href='/#offer'>Offer</a></li>
            <li><a href='/#review'>Review</a></li>
            <li><a href='/#getquote'>Get Quote</a></li>
          </ul>
        </div>
        <div className="navbar-end">
          <a href='tel:+18554301263' className="btn bg-white text-white font-bold nav-call mr-5"><i className="fa-solid fa-phone pr-2"></i>(855) 430-1263</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar