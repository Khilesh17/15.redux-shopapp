import React from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import logo from '../assets/logo.png';
import {NavLink} from 'react-router-dom';
import { useSelector } from 'react-redux';

export const Navbar = () => {

  const { cart } = useSelector((state) => state);

  return (
    <div className='container'>
      <div className='header'>
        <NavLink to='/'>
          <img src={logo} alt="imagelog" height={45} />
        </NavLink>
        <div className='header-in'>
          <NavLink className='header-link' to='/'>
            <p>Home</p>
          </NavLink>

          <NavLink className='header-link' to='/cart'>
            <FaShoppingCart className='header-cart' />
            {
              cart.length > 0 &&
              <span className='header-count'>{cart.length}</span>
            }
          </NavLink>
        </div>
      </div>
    </div>
  )
}
