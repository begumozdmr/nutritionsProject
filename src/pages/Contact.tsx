import PageHeader from 'components/PageHeader'
import React from 'react'

export default function Contact() {
  return (
    <>
      <PageHeader page={"Contact Us"} />

      <section className='container'>
        <div className='row'>
          <div className='page__header__comment page__header__comment--content'>

            <div className='grid-3'>
              <div className='cards cards--grey cards--grey__contact'>
                <div className='theme__button theme__button--circular'>
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-map-pin" width="50" height="50" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                    <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                  </svg>
                </div>
                <h1>Our Location</h1>
                <p>The Queen's Walk, Bishop's, London SE1 7PB, United Kingdom</p>
              </div>

              <div className='cards cards--grey cards--grey__contact'>
                <div className='theme__button theme__button--circular'>
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-headphones" width="50" height="50" viewBox="0 0 24 24" strokeWidth="1" stroke=" currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 13m0 2a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2z" />
                    <path d="M15 13m0 2a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2z" />
                    <path d="M4 15v-3a8 8 0 0 1 16 0v3" />
                  </svg>
                </div>
                <h1>Our Contact</h1>
                <p>+ (567) 1234-567-8900</p>
              </div>

              <div className='cards cards--grey cards--grey__contact'>
                <div className='theme__button theme__button--circular'>
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail" width="50" height="50" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                    <path d="M3 7l9 6l9 -6" />
                  </svg>
                </div>
                <h1>Mail Us</h1>
                <p>info@nitritionist.com</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className='container__background container__background--about'>
        <div className='container'>
          <div className='row'>
            <div className='page__header__comment page__header__comment--content'>
              <h4 className='content__header'>Get In Touch</h4>
              <h5 className='content__header content__header--comment'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</h5>

              <div className='grid-2'>
                <img src={require("../img/man-3.jpg")} alt='man-3' className='man-3'></img>
                <div className='contact__area'>
                  <div className='grid-2'>
                    <input type='text' name='name' placeholder='Your Name' className='contact__name'></input>
                    <input type='text' name='number' placeholder='Phone Number' className='contact__number'></input>
                  </div>
                  <input type='text' name='email' placeholder='Your Email' className='contact__email'></input>
                  <input type='text' name='subject' placeholder='Subject' className='contact__subject'></input>
                  <textarea name='message' placeholder='Write Your Message' className='contact__message'></textarea>

                  <button type='submit' className='subscribe__button subscribe__button--contact black'>Send Message</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3062.2007760588945!2d32.74246607640698!3d39.86974038874877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d347acc4350fa9%3A0x22720cefb175c933!2sBilkent%20CYBERPARK!5e0!3m2!1str!2str!4v1700392692121!5m2!1str!2str" width="100%" height="250" loading="lazy"></iframe>
      </section>
    </>
  )
}
