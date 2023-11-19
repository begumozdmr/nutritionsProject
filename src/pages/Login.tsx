import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <>
      <section className='full__width__background'>
        <div className='container'>
          <div className='row'>
            <div className='page__header__comment page__header__comment--content'>
              <h4 className='content__header content__header--white'>LOGIN</h4>

              <div className='contact__area contact__area--width'>
                <input type='text' name='nameSurname' placeholder='Your Name And Surname' className='contact__name'></input>
                <input type='text' name='email' placeholder='Your Email' className='contact__email'></input>
                <input type='password' name='password' placeholder='Your Password' className='contact__password'></input>

                <div className='login__page__footer__container'>
                  <button type='submit' className='subscribe__button subscribe__button--black'>Login</button>
                  <Link to="/signup">
                    Don't have an account?
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
