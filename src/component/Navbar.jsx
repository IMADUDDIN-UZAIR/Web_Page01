import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='bg-black flex justify-end items-center h-12'>
      <div>
        <ul className=' flex justify-center items-center space-x-4'>
            <li className='font-bold text-2xl text-white ml-10'><NavLink exact to ="./">Overview</NavLink> </li>
            <li className='font-bold text-2xl text-white'><NavLink to="./">Overview</NavLink> </li>
            <li className='font-bold text-2xl text-white'><NavLink to ="./">Features</NavLink> </li>
            <li><NavLink to ="./">About</NavLink> </li>

        </ul>
      </div>
      <div className="btn text-blue-500 text-bold text-2xl border-1-blue">Pricing</div>
    </div>
  )
}

export default Navbar
