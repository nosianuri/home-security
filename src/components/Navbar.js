import React from 'react';
import logo from "../assets/vivint-logo.png";

const Navbar = () => {
  return (
    <div className=''>
        <div class="navbar bg-primary fixed z-50">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 uppercase text-white">
        <li><a>Products</a></li>
        <li><a>Offer</a></li>
        <li><a>Review</a></li>
        <li><a>Get Quote</a></li>
      </ul>
    </div>
    <a class="btn btn-ghost normal-case text-xl lg:pl-10">
        <img width={90} src={logo} alt="" />
    </a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal uppercase text-white p-0">
    <li><a>Products</a></li>
        <li><a>Offer</a></li>
        <li><a>Review</a></li>
        <li><a>Get Quote</a></li>
    </ul>
  </div>
  <div class="navbar-end">
    <a class="text-white pr-10">+1000000000</a>
  </div>
</div>
    </div>
  )
}

export default Navbar