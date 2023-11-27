import { gql } from '@apollo/client';
import { ContextProvider } from 'context/contextProvider';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';

const SIGNUP__USERS = gql`
  mutation CreateUsers($input: CreateUsers!) {
   createUsers(input: $input) {
    id
    nameSurname
    email
    password
    token
    usersDate
  }
}
`;

export default function SignUp() {

  const { handleLinkClick, setCreateUser, createUser } = useContext(ContextProvider);
  const [error, setError] = React.useState<boolean>(false);
  const [errorMessage, setErrorMessage] = React.useState<string>("");

  let randomToken = require('random-token').create('abcdefghijklmnopqrstuvwxzyABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789');
  let randomID = require('random-token').create('123456789');

  const ErrorMessageFunction = (value: string) => {
    setError(true);
    setErrorMessage(value);
  };

  const [clickCreateUser] = useMutation(SIGNUP__USERS, {
    variables: {
      input: {
        id: Number(randomID(5)),
        nameSurname: createUser.nameSurname,
        email: createUser.email,
        password: createUser.password,
        token: randomToken(32),
        usersDate: new Date().getDate() + "." + (new Date().getMonth() + 1) + "." + (new Date().getFullYear())
      }
    },
    onError: (error) => {
      if (error.message.includes('Email is already in use.')) {
        ErrorMessageFunction('Email is already in use.');
      }
      else if (error.message.includes('Please fill in all fields.')) {
        ErrorMessageFunction('Please fill in all fields.');
      }
      else if (error.message.includes('Your password cannot be less than 8 characters.')) {
        ErrorMessageFunction('Your password cannot be less than 8 characters.');
      }
    },
    onCompleted: () => {
      window.location.href = "http://localhost:3000/login";
      handleLinkClick(4);
    }
  });

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setCreateUser({ ...createUser, [event.target.name]: event.target.value })
  };

  return (
    <>
      <section className='full__width__background'>
        <div className='container'>
          <div className='row'>
            <div className='page__header__comment page__header__comment--content'>
              <h4 className='content__header content__header--white'>SIGN UP</h4>

              <div className='contact__area contact__area--width'>
                <span className={`error__message ${error ? "active" : ""}`}>{errorMessage}</span>
                <input type='text' name='nameSurname' placeholder='* Your Name And Surname' className={`contact__name ${error ? "error" : ""}`} value={createUser.nameSurname as string || ""} onChange={handleChangeInput}></input>
                <input type='text' name='email' placeholder='* Your Email' className={`contact__email ${error ? "error" : ""}`} value={createUser.email as string || ""} onChange={handleChangeInput}></input>
                <input type='password' name='password' placeholder='* Your Password' className={`contact__password ${error ? "error" : ""}`} value={createUser.password as string || ""} onChange={handleChangeInput}></input>

                <div className='login__page__footer__container'>
                  <button type='submit' className='subscribe__button subscribe__button--black' onClick={() => clickCreateUser()}>Sign Up</button>
                  <Link to="/login" onClick={() => handleLinkClick(4)}>
                    Do you have an account ?
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
