import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, FreeMode, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import PageHeader from 'components/PageHeader';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { gql, useMutation } from '@apollo/client';

interface NutritionType {
  id: number;
  src: string;
  name: string;
  content: string;
  money: number;
  usersNumber: number,
  meetingsNumber: number,
  language: string
};

const NutritionData: NutritionType[] = [
  {
    id: 1,
    name: "Danial Frankie",
    src: "man-1.jpg",
    content: "DIET & NUTRITION",
    money: 240,
    usersNumber: 100,
    meetingsNumber: 120,
    language: "TR/EN"
  },
  {
    id: 2,
    name: "Alena John",
    src: "woman-1.jpg",
    content: "NUTRITION",
    money: 180,
    usersNumber: 85,
    meetingsNumber: 100,
    language: "TR/EN"
  },
  {
    id: 3,
    name: "Michal Smart",
    src: "man-2.jpg",
    content: "GENERAL NUTRITION",
    money: 270,
    usersNumber: 270,
    meetingsNumber: 250,
    language: "EN"
  },
  {
    id: 4,
    name: "James Callum",
    content: "NUTRITION",
    src: "man-3.jpg",
    money: 240,
    usersNumber: 100,
    meetingsNumber: 120,
    language: "TR/EN"
  },
  {
    id: 5,
    name: "Olivia Samantha",
    content: "NUTRITION",
    src: "woman-3.jpg",
    money: 180,
    usersNumber: 85,
    meetingsNumber: 100,
    language: "TR/EN"
  },
  {
    id: 6,
    name: "Isabella Madison",
    content: "GENERAL NUTRITION",
    src: "woman-4.jpg",
    money: 270,
    usersNumber: 250,
    meetingsNumber: 250,
    language: "EN"
  },
];

const ADDAPPOINTMENT_MUTATION = gql`
mutation Appointment($addAppointmentId: Int!, $token: String, $nutritionName: String, $day: String, $hour: String) {
  addAppointment(id: $addAppointmentId, token: $token, nutritionName: $nutritionName, day: $day, hour: $hour) {
    id
    nutritionName
    day
    hour
  }
}
`;

export default function About() {

  const [popupControl, setPopupControl] = React.useState<boolean>(false);
  const [nutritionNameSurname, setNutritionNameSurname] = React.useState<string>("");
  const [time, setTime] = React.useState<string>("");
  const [selected, setSelected] = React.useState<Date>();
  let randomID = require('random-token').create('123456789');

  const handleAppointmentFunction = (value: string) => {
    setPopupControl(true);
    setNutritionNameSurname(value);
  };

  const [addClickAppointment] = useMutation(ADDAPPOINTMENT_MUTATION, {
    variables: {
      addAppointmentId: Number(randomID(3)),
      token: localStorage.getItem("token"),
      nutritionName: nutritionNameSurname,
      day: selected?.toLocaleDateString("tr-TR"),
      hour: time
    },
    onCompleted: () => {
      setPopupControl(false);
    }
  });

  return (
    <main>
      <PageHeader page={"About Us"} />

      <section className='container'>
        <div className='row'>
          <div className='page__header__comment page__header__comment--content'>
            <h4 className='content__header'>Our Main Areas Of Expertise</h4>
            <div className='grid-4'>
              <div className='cards cards--grey'>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-ribbon-health" width="64" height="64" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <defs>
                    <linearGradient id="myGradient" gradientTransform="rotate(45)">
                      <stop offset="0%" stopColor="rgb(202, 248, 128)" />
                      <stop offset="100%" stopColor="rgb(113, 206, 126)" />
                    </linearGradient>
                  </defs>
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M7 21s9.286 -9.841 9.286 -13.841a3.864 3.864 0 0 0 -1.182 -3.008a4.13 4.13 0 0 0 -3.104 -1.144a4.13 4.13 0 0 0 -3.104 1.143a3.864 3.864 0 0 0 -1.182 3.01c0 4 9.286 13.84 9.286 13.84" stroke='url(#myGradient)' />
                </svg>
                <h5>Child Nutrition</h5>
                <p>It is a long established fact that a reader will distracted the readable content</p>
                <button className='read__more__button'>READ MORE</button>
              </div>
              <div className='cards cards--grey'>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-swimming" width="64" height="64" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M16 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" stroke='url(#myGradient)' />
                  <path d="M6 11l4 -2l3.5 3l-1.5 2" stroke='url(#myGradient)' />
                  <path d="M3 16.75a2.4 2.4 0 0 0 1 .25a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 1 -.25" stroke='url(#myGradient)' />
                </svg>
                <h5>Personal Coaching</h5>
                <p>It is a long established fact that a reader will distracted the readable content</p>
                <button className='read__more__button'>READ MORE</button>
              </div>
              <div className='cards cards--grey'>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-yin-yang-filled" width="64" height="64" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-9 1.732a8 8 0 0 0 4 14.928l.2 -.005a4 4 0 0 0 0 -7.99l-.2 -.005a4 4 0 0 1 -.2 -7.995l.2 -.005a7.995 7.995 0 0 0 -4 1.072zm4 1.428a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0 -3z" strokeWidth="0.2" fill='url(#myGradient)' stroke='url(#myGradient)' />
                  <path d="M12 14.5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0 -3z" strokeWidth="0.2" fill='url(#myGradient)' stroke='url(#myGradient)' />
                </svg>
                <h5>Sports Nutritionist</h5>
                <p>It is a long established fact that a reader will distracted the readable content</p>
                <button className='read__more__button'>READ MORE</button>
              </div>
              <div className='cards cards--grey'>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-play-basketball" width="64" height="64" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M10 4a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" stroke='url(#myGradient)' />
                  <path d="M5 21l3 -3l.75 -1.5" stroke='url(#myGradient)' />
                  <path d="M14 21v-4l-4 -3l.5 -6" stroke='url(#myGradient)' />
                  <path d="M5 12l1 -3l4.5 -1l3.5 3l4 1" stroke='url(#myGradient)' />
                  <path d="M18.5 16a.5 .5 0 1 0 0 -1a.5 .5 0 0 0 0 1z" fill="url(#myGradient)" stroke='url(#myGradient)' />
                </svg>
                <h5>Fitness Performance</h5>
                <p>It is a long established fact that a reader will distracted the readable content</p>
                <button className='read__more__button'>READ MORE</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='container__background container__background--about'>
        <div className='container'>
          <div className='row'>
            <div className='page__header__comment page__header__comment--content'>
              <div className={`open__popup ${popupControl ? "active" : ""}`}>
                <div className='popup__container'>
                  <div className='popup__header'>
                    <h2>Make an Appointment</h2>
                    <div className='theme__button' onClick={() => setPopupControl(false)}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="18" height="18" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M18 6l-12 12" />
                        <path d="M6 6l12 12" />
                      </svg>
                    </div>
                  </div>
                  <div className='popup__content'>
                    <p>Nutrition Name : </p>
                    {nutritionNameSurname}
                  </div>

                  <div className='popup__content'>
                    <p>Appointment Day : </p>
                    <DayPicker
                      mode="single"
                      selected={selected}
                      onSelect={setSelected}
                    />
                  </div>

                  <div className='popup__content'>
                    <p>Appointment Hours : </p>
                    <input type='time' className='time__input' value={time} onChange={(e) => setTime(e.target.value)}></input>
                  </div>

                  <button className='subscribe__button subscribe__button--contact black subscribe__button--width' onClick={() => { addClickAppointment() }}>Add Appointment</button>
                </div>
              </div>
              <h4 className='content__header'>Diet & Nutrition Experts</h4>
              <Swiper
                slidesPerView={3}
                spaceBetween={17}
                freeMode={true}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  575: {
                    slidesPerView: 2,
                    spaceBetween: 17,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 17,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 17,
                  },
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
              >
                {
                  NutritionData.map((index: NutritionType) => {
                    return (
                      <SwiperSlide key={index.id}>
                        <div className='cards cards--doctor'>
                          <div className='customers__comment__user customers__comment__user--about'>
                            <div className='users__image--doctor'>
                              <img src={require(`../img/${index.src}`)} alt={index.name}></img>
                            </div>
                            <div className='customers__comment__header customers__comment__header--about'>
                              <h5>{index.name}</h5>
                              <span>{index.content}</span>
                              <button className='appointment__button' onClick={() => handleAppointmentFunction(index.name)}>Make An Appointment</button>
                            </div>
                          </div>

                          <hr className='customers__hr' />
                          <div className='doctor__comment'>
                            <div className='customers__comment__header customers__comment__header--about'>
                              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-currency-pound" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M17 18.5a6 6 0 0 1 -5 0a6 6 0 0 0 -5 .5a3 3 0 0 0 2 -2.5v-7.5a4 4 0 0 1 7.45 -2m-2.55 6h-7" />
                              </svg>
                              <span>{index.money}/month</span>
                            </div>

                            <div className='customers__comment__header customers__comment__header--about'>
                              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user-plus" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                                <path d="M16 19h6" />
                                <path d="M19 16v6" />
                                <path d="M6 21v-2a4 4 0 0 1 4 -4h4" />
                              </svg>
                              <span>{index.meetingsNumber}+</span>
                            </div>

                            <div className='customers__comment__header customers__comment__header--about'>
                              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-camera" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2" />
                                <path d="M9 13a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                              </svg>
                              <span>{index.usersNumber}+</span>
                            </div>

                            <div className='customers__comment__header customers__comment__header--about'>
                              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-world" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                                <path d="M3.6 9h16.8" /><path d="M3.6 15h16.8" />
                                <path d="M11.5 3a17 17 0 0 0 0 18" />
                                <path d="M12.5 3a17 17 0 0 1 0 18" />
                              </svg>
                              <span>{index.language}</span>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    )
                  })
                }
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='container'>
          <div className='row'>
            <div className='page__header__comment page__header__comment--content'>
              <h4 className='content__header'>Our References</h4>
            </div>
          </div>
        </div>
        <div className='references__container'>
          <div className='container'>
            <div className='row'>
              <Swiper
                slidesPerView={4}
                spaceBetween={30}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                className="mySwiper"
                modules={[Autoplay]}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                  },
                  575: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                  },
                }}
              >
                <SwiperSlide>
                  <img src={require("../img/1.png")} alt='reference__1' className='reference__image'></img>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={require("../img/2.png")} alt='reference__2' className='reference__image'></img>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={require("../img/3.png")} alt='reference__3' className='reference__image'></img>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={require("../img/4.png")} alt='reference__4' className='reference__image'></img>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={require("../img/5.png")} alt='reference__5' className='reference__image'></img>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={require("../img/1.png")} alt='reference__1' className='reference__image'></img>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={require("../img/3.png")} alt='reference__3' className='reference__image'></img>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={require("../img/5.png")} alt='reference__5' className='reference__image'></img>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>

        </div>
      </section>
    </main >
  )
}
