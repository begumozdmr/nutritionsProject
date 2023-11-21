import { ContextProvider } from 'context/contextProvider';
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {

  const { handleLinkClick } = useContext(ContextProvider);

  return (
    <footer className='footer__container'>
      <div className='container'>
        <div className='row'>
          <div className='footer__content'>
            <div className='grid-4 grid-4--footer'>
              <div className='footer__comment'>
                <div className='navbar__logo'>
                  <Link to="/" onClick={() => handleLinkClick(1)}>
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
                <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat dictum lacus, ut hendrerit mi pulvinar vel. Fusce id nibh at neque eleifend tristique.</h6>
                <div className='footer__social__media'>
                  <div className='theme__button theme__button--footer'>
                    <Link to="">
                      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-facebook" width="20" height="20" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                      </svg>
                    </Link>
                  </div>
                  <div className='theme__button theme__button--footer'>
                    <Link to="">
                      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-google" width="20" height="20" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M20.945 11a9 9 0 1 1 -3.284 -5.997l-2.655 2.392a5.5 5.5 0 1 0 2.119 6.605h-4.125v-3h7.945z" />
                      </svg>
                    </Link>
                  </div>
                  <div className='theme__button theme__button--footer'>
                    <Link to="">
                      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-twitch" width="20" height="20" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M4 5v11a1 1 0 0 0 1 1h2v4l4 -4h5.584c.266 0 .52 -.105 .707 -.293l2.415 -2.414c.187 -.188 .293 -.442 .293 -.708v-8.585a1 1 0 0 0 -1 -1h-14a1 1 0 0 0 -1 1z" />
                        <path d="M16 8l0 4" />
                        <path d="M12 8l0 4" />
                      </svg>
                    </Link>
                  </div>
                  <div className='theme__button theme__button--footer'>
                    <Link to="">
                      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-twitter" width="20" height="20" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              <div className='footer__comment'>
                <h3>Contracts</h3>
                <Link to="#">
                  Confidentiality Agreement
                </Link>
                <Link to="#">
                  User Agreement
                </Link>
                <Link to="#">
                  KVKK Illumination Text
                </Link>
                <Link to="#">
                  Company Agreement
                </Link>
              </div>

              <div className='footer__comment'>
                <h3>Quick Link</h3>
                <Link to="/" onClick={() => handleLinkClick(1)}>
                  Home
                </Link>
                <Link to="/about" onClick={() => handleLinkClick(2)}>
                  About Us
                </Link>
                <Link to="/contact" onClick={() => handleLinkClick(3)}>
                  Contact Us
                </Link>
                <Link to="/login" onClick={() => handleLinkClick(4)}>
                  Login
                </Link>
              </div>

              <div className='footer__comment'>
                <h3>Subscribe Newsletter</h3>
                <div className='footer__subscribe'>
                  <input type='text' placeholder='Your Email Address' name='subscribe' className='subscribe'></input>
                  <button type='submit' className='subscribe__button'>Submit</button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
