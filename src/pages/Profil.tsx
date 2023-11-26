import { gql, useMutation } from '@apollo/client';
import React from 'react'

const CREATEBODYINDEX__MUTATION = gql`
    mutation BodyIndex($input: CreateBodyIndex!) {
    bodyIndex(input: $input) {
      id
      day
      weight
      height
      result
    }
  }
`;

export default function Profil() {

    const [bodyValue, setBodyValue] = React.useState({ height: "", weight: "" });
    const [calculate, setCalculate] = React.useState<string>("");
    let randomID = require('random-token').create('123456789');

    const HandleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBodyValue({ ...bodyValue, [event.target.name]: event.target.value });
    };

    const [clickBodyIndex] = useMutation(CREATEBODYINDEX__MUTATION, {
        variables: {
            input: {
                token: localStorage.getItem("token"),
                id: Number(randomID(3)),
                day: new Date().getDate() + "." + (new Date().getMonth() + 1) + "." + (new Date().getFullYear()),
                weight: Number(bodyValue.weight),
                height: Number(bodyValue.height),
                result: calculate
            }
        }
    });

    const CalculateFunction = () => {
        const weight = Number(bodyValue.weight);
        const height = Number(bodyValue.height);
        const heightInMeters = height / 100;

        const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
        setCalculate(String(bmi));
        clickBodyIndex();
        setBodyValue({ height: "", weight: "" });
    };

    return (
        <>
            <section className='container__background container__background--about'>
                <div className='container'>
                    <div className='row'>
                        <div className='page__header__comment page__header__comment--content'>
                            <h4 className='content__header'>Our Package Diet List For You</h4>
                            <div className='grid-3'>
                                <div className='cards cards--profil'>
                                    <span className='cards__content__number'>01</span>
                                    <div className='cards__content__media'>
                                        <div className='cards__content__icon'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-salad" width="50" height="50" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <path d="M4 11h16a1 1 0 0 1 1 1v.5c0 1.5 -2.517 5.573 -4 6.5v1a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1v-1c-1.687 -1.054 -4 -5 -4 -6.5v-.5a1 1 0 0 1 1 -1z" />
                                                <path d="M18.5 11c.351 -1.017 .426 -2.236 .5 -3.714v-1.286h-2.256c-2.83 0 -4.616 .804 -5.64 2.076" />
                                                <path d="M5.255 11.008a12.204 12.204 0 0 1 -.255 -2.008v-1h1.755c.98 0 1.801 .124 2.479 .35" />
                                                <path d="M8 8l1 -4l4 2.5" />
                                                <path d="M13 11v-.5a2.5 2.5 0 1 0 -5 0v.5" />
                                            </svg>
                                        </div>
                                        <div className='cards__content__image'>
                                            <img src={require("../img/profil-1.jpg")} alt='profil-1' className='profil__image'></img>
                                        </div>
                                    </div>
                                    <div className='cards__content__services'>
                                        <h5>Personalized Nutrition</h5>
                                        <p>How all this mistaken idea of denouncing pleasure and praising pain was born </p>
                                    </div>
                                </div>

                                <div className='cards cards--profil'>
                                    <span className='cards__content__number'>02</span>
                                    <div className='cards__content__media'>
                                        <div className='cards__content__icon'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bottle" width="50" height="50" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <path d="M10 5h4v-2a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v2z" />
                                                <path d="M14 3.5c0 1.626 .507 3.212 1.45 4.537l.05 .07a8.093 8.093 0 0 1 1.5 4.694v6.199a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2v-6.2c0 -1.682 .524 -3.322 1.5 -4.693l.05 -.07a7.823 7.823 0 0 0 1.45 -4.537" />
                                                <path d="M7 14.803a2.4 2.4 0 0 0 1 -.803a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 1 -.805" />
                                            </svg>
                                        </div>
                                        <div className='cards__content__image'>
                                            <img src={require("../img/profil-2.jpg")} alt='profil-1' className='profil__image'></img>
                                        </div>
                                    </div>
                                    <div className='cards__content__services'>
                                        <h5>Health Diet Programs</h5>
                                        <p>How all this mistaken idea of denouncing pleasure and praising pain was born </p>
                                    </div>
                                </div>

                                <div className='cards cards--profil'>
                                    <span className='cards__content__number'>03</span>
                                    <div className='cards__content__media'>
                                        <div className='cards__content__icon'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heartbeat" width="50" height="50" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <path d="M19.5 13.572l-7.5 7.428l-2.896 -2.868m-6.117 -8.104a5 5 0 0 1 9.013 -3.022a5 5 0 1 1 7.5 6.572" />
                                                <path d="M3 13h2l2 3l2 -6l1 3h3" />
                                            </svg>
                                        </div>
                                        <div className='cards__content__image'>
                                            <img src={require("../img/profil-3.jpg")} alt='profil-1' className='profil__image'></img>
                                        </div>
                                    </div>
                                    <div className='cards__content__services'>
                                        <h5>Weight Loss Program</h5>
                                        <p>How all this mistaken idea of denouncing pleasure and praising pain was born </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='references__container references__container--black'>
                <div className='container'>
                    <div className='row'>
                        <div className='page__header__comment page__header__comment--content'>
                            <h4 className='content__header content__header--black'>Calculate Body Mask Index</h4>
                            <div className='contact__area contact__area--width'>
                                <input type='text' name='height' placeholder='Your Height (183)' className='contact__password' value={bodyValue.height as string || ""} onChange={HandleChangeInput}></input>
                                <input type='text' name='weight' placeholder='Your Weight (67)' className='contact__email' value={bodyValue.weight as string || ""} onChange={HandleChangeInput}></input>

                                <div className='login__page__footer__container'>
                                    <button type='submit' className='subscribe__button subscribe__button--black subscribe__button--calculate' onClick={() => CalculateFunction()}>Calculate / Save</button>
                                </div>
                                {
                                    calculate ? <span className='result'>Result : {calculate}</span> : null
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
