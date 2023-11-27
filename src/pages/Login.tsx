import { gql, useMutation } from '@apollo/client';
import { ContextProvider } from 'context/contextProvider';
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LOGIN__MUTATION = gql`
mutation Login($input: InputLogin!) {
  login(input: $input) {
    id
    nameSurname
    email
    password
    token
    usersDate
    usersDetails {
      id
      day
      weight
      height
      result
    }
    meetingTime {
      id
      day
      nutritionName
    }
  }
}
`
export default function Login() {

  const { handleLinkClick, setLoginUsers, loginUsers, setUsersControl, setUsersInformation, setPageLoad } = useContext(ContextProvider);
  const navigate = useNavigate();
  const [error, setError] = React.useState<boolean>(false);
  const [errorMessage, setErrorMessage] = React.useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setLoginUsers({ ...loginUsers, [event.target.name]: event.target.value });
  };

  const ErrorMessageFunction = (value: string) => {
    setError(true);
    setErrorMessage(value);
    setLoginUsers({ email: "", password: "" });
  };

  const [loginClick] = useMutation(LOGIN__MUTATION, {
    variables: {
      input: {
        email: loginUsers.email,
        password: loginUsers.password
      }
    },
    onError: (error) => {
      if (error.message.includes('Please fill in all fields.')) {
        ErrorMessageFunction('Please fill in all fields.');
      }
      else if (error.message.includes('Your password is wrong.')) {
        ErrorMessageFunction('Your password is wrong.');
      }
      else if (error.message.includes('User not found.')) {
        ErrorMessageFunction('User not found.');
      }
    },
    onCompleted: ({ login }) => {
      localStorage.setItem("token", login.token as string);
      setLoginUsers({ email: "", password: "" });
      navigate(`/profil/${login.id}`);
      setUsersControl({ usersControl: false });
      setUsersInformation({ id: login.id, nameSurname: login.nameSurname });
      setPageLoad({ pageLoad: true });
    }
  });

  return (
    <>
      <section className='full__width__background'>
        <div className='container'>
          <div className='row'>
            <div className='page__header__comment page__header__comment--content'>
              <h4 className='content__header content__header--white'>LOGIN</h4>

              <div className='contact__area contact__area--width'>
                <span className={`error__message ${error ? "active" : ""}`}>{errorMessage}</span>
                <input type='text' name='email' placeholder='* Your Email' className={`contact__email ${error ? "error" : ""}`} value={loginUsers.email as string || ""} onChange={handleInputChange}></input>
                <input type='password' name='password' placeholder='* Your Password' className={`contact__password ${error ? "error" : ""}`} value={loginUsers.password as string || ""} onChange={handleInputChange}></input>

                <div className='login__page__footer__container'>
                  <button type='submit' className='subscribe__button subscribe__button--black' onClick={() => loginClick()}>Login</button>
                  <Link to="/signup" onClick={() => handleLinkClick(5)}>
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
