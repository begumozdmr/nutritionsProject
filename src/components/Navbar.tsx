import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header>
      <nav className='navbar__container'>
        <div className='navbar__content'>
          <div className='navbar__logo'>
            <Link to="/">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plant-2" width="60" height="60" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <defs>
                  <linearGradient id="myGradient" gradientTransform="rotate(45)">
                    <stop offset="0%" stopColor="rgb(202, 248, 128)" />
                    <stop offset="100%" stopColor="rgb(113, 206, 126)" />
                  </linearGradient>
                </defs>
                <path d="M2 9a10 10 0 1 0 20 0" stroke="url(#myGradient)" />
                <path d="M12 19a10 10 0 0 1 10 -10" stroke="url(#myGradient)" />
                <path d="M2 9a10 10 0 0 1 10 10" stroke="url(#myGradient)" />
                <path d="M12 4a9.7 9.7 0 0 1 2.99 7.5" stroke="url(#myGradient)" />
                <path d="M9.01 11.5a9.7 9.7 0 0 1 2.99 -7.5" stroke="url(#myGradient)" />
              </svg>
              <h1 className='navbar__title'>Nutritionist</h1>
            </Link>
          </div>
          <ul className='navbar__items'>
            <li className='navbar__item navbar__item--link'>
              <Link to="/">Home</Link>
            </li>
            <li className='navbar__item navbar__item--link'>
              <Link to="/about">About Us</Link>
            </li>

            <li className='navbar__item navbar__item--link'>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li className='navbar__item navbar__item--link'>
              <Link to="/login">Login</Link>
            </li>
            <li className='navbar__item navbar__item--link'>
              <Link to="/signUp">Sign Up</Link>
            </li>

            <div className='navbar__item--setting'>
              <li className='navbar__item'>
                <div className='theme__button'>
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="18" height="18" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>
                </div>
              </li>

              <li className='navbar__item'>
                <div className='theme__button'>
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-moon" width="18" height="18" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" /></svg>
                </div>
              </li>

              <li className='navbar__item'>
                <div className='theme__button theme__button--menu'>
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu-2" width="18" height="18" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 6l16 0" /><path d="M4 12l16 0" /><path d="M4 18l16 0" /></svg>
                </div>
              </li>
            </div>
          </ul>
        </div>
      </nav>
    </header>
  )
}
