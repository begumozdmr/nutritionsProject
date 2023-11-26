import { gql, useMutation } from '@apollo/client';
import { ContextProvider } from 'context/contextProvider';
import React, { useContext, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const TOKEN__MUTATION = gql`
mutation Token($token: String) {
  token(token: $token) {
    id
    nameSurname
  }
}
`;

interface DataType {
  id: number;
  path: string;
  name: string;
};

const navbarLinksData: DataType[] = [
  {
    id: 1,
    path: "/",
    name: "Home"
  },
  {
    id: 2,
    path: "/about",
    name: "About Us"
  },
  {
    id: 3,
    path: "/contact",
    name: "Contact Us"
  },
  {
    id: 4,
    path: "/login",
    name: "Login"
  },
  {
    id: 5,
    path: "/signup",
    name: "Sign Up"
  }
];

const loginUsersNavbarLinksData: DataType[] = [
  {
    id: 1,
    path: "/",
    name: "Home"
  },
  {
    id: 2,
    path: "/about",
    name: "About Us"
  },
  {
    id: 3,
    path: "/contact",
    name: "Contact Us"
  },
];

export default function Navbar() {

  const navigate = useNavigate();
  const [searchContainerActive, setSearchContainerActive] = useState<boolean>(false);
  const [usersDropdownActive, setUsersDropdownActive] = useState<boolean>(false);
  const [responsiveMenu, setresponsiveMenu] = useState<boolean>(false);
  const { darkThemeControl, setDarkThemeControl, activeIndex, handleLinkClick, usersInformation, setUsersInformation, usersControl, setUsersControl, setPageLoad } = useContext(ContextProvider);

  const [TokenUsers] = useMutation(TOKEN__MUTATION, {
    variables: {
      token: localStorage.getItem("token")
    },
    onCompleted: ({ token }) => {
      if (token) {
        setUsersInformation({ id: token.id, nameSurname: token.nameSurname });
      }
    }
  });

  const TokenControlFunction = () => {
    let usersToken = localStorage.getItem("token");
    if (!usersToken) {
      setUsersControl({ usersControl: true });
    }
    else {
      setUsersControl({ usersControl: false });
    }
  };

  const handleSearchContainer = () => {
    setSearchContainerActive(!searchContainerActive);
  };

  const handleResponsiveMenu = () => {
    setresponsiveMenu(!responsiveMenu);
  };

  const handleUsersDropdown = () => {
    setUsersDropdownActive(!usersDropdownActive);
  };

  const dropdownRef = useRef<HTMLLIElement>(null); // closest olarak kullanılmaktadır.
  const usersDropDownRef = useRef<HTMLLIElement>(null); // closest olarak kullanılmaktadır.

  const handleClickOutsideDropdown = (e: any) => {
    if (searchContainerActive && !dropdownRef.current?.contains(e.target as Node)) {
      setSearchContainerActive(false);
    };
  };

  const handleClickOutsideDropdownUsers = (e: any) => {
    if (usersDropdownActive && !usersDropDownRef.current?.contains(e.target as Node)) {
      setUsersDropdownActive(false);
    };
  }

  const darkThemeFunction = () => {
    setDarkThemeControl({ darkThemeControl: !darkThemeControl.darkThemeControl });
  };

  const handleExitFunction = () => {
    localStorage.removeItem("token");
    navigate("/");
    setUsersControl({ usersControl: false });
    setUsersInformation({ id: "", nameSurname: "" });
    TokenControlFunction();
    setPageLoad({ pageLoad: true });
  };

  document.addEventListener("click", handleClickOutsideDropdown);
  document.addEventListener("click", handleClickOutsideDropdownUsers);

  React.useEffect(() => {
    TokenControlFunction();
    TokenUsers();
  }, []);

  return (
    <header>
      <nav className='navbar__container'>
        <div className='navbar__content'>
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
          <ul className='navbar__items'>
            {
              !usersControl.usersControl ?
                loginUsersNavbarLinksData.map((index: { id: number, path: string, name: string }) => {
                  return (
                    <li className={`navbar__item navbar__item--link ${index.id === activeIndex.activeIndex ? "active" : ""}`} key={index.id}>
                      <Link to={index.path} onClick={() => handleLinkClick(index.id)}>{index.name}</Link>
                    </li>
                  )
                })
                :
                navbarLinksData.map((index: { id: number, path: string, name: string }) => {
                  return (
                    <li className={`navbar__item navbar__item--link ${index.id === activeIndex.activeIndex ? "active" : ""}`} key={index.id}>
                      <Link to={index.path} onClick={() => handleLinkClick(index.id)}>{index.name}</Link>
                    </li>
                  )
                })
            }
            <div className='navbar__item--setting'>

              <li className='navbar__item'>
                <button className='theme__button theme__button--menu' onClick={handleResponsiveMenu}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu-2" width="18" height="18" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 6l16 0" /><path d="M4 12l16 0" /><path d="M4 18l16 0" /></svg>
                </button>
              </li>

              <li className='navbar__item' ref={dropdownRef}>
                <button className='theme__button' onClick={handleSearchContainer}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="18" height="18" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                    <path d="M21 21l-6 -6" />
                  </svg>
                </button>

                <div className={`search__container ${searchContainerActive ? "active" : ""}`}>
                  <input type='text' placeholder='Search...'></input>
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="18" height="18" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                    <path d="M21 21l-6 -6" />
                  </svg>
                </div>
              </li>

              <li className='navbar__item'>
                <button className='theme__button' onClick={darkThemeFunction}>
                  {
                    !darkThemeControl.darkThemeControl ?
                      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-moon" width="18" height="18" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
                      </svg>
                      :
                      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-sun" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                        <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
                      </svg>
                  }
                </button>
              </li>

              <li className='navbar__item' ref={usersDropDownRef}>
                {
                  !usersControl.usersControl ?
                    <>
                      <button className='theme__button--users__image' onClick={handleUsersDropdown}>
                        <img src={require("../img/users__image.png")} alt='users__image'></img>
                      </button>

                      <div className={`users__dropdown ${usersDropdownActive ? "active" : ""}`}>
                        <span>Welcome {usersInformation.nameSurname}</span>

                        <Link to={`/profil/${usersInformation.id}`} className='users__menu__dropdown__content'>
                          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user-circle" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                            <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                            <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
                          </svg>
                          Profil
                        </Link>

                        <Link to="/details" className='users__menu__dropdown__content'>
                          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-key" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M16.555 3.843l3.602 3.602a2.877 2.877 0 0 1 0 4.069l-2.643 2.643a2.877 2.877 0 0 1 -4.069 0l-.301 -.301l-6.558 6.558a2 2 0 0 1 -1.239 .578l-.175 .008h-1.172a1 1 0 0 1 -.993 -.883l-.007 -.117v-1.172a2 2 0 0 1 .467 -1.284l.119 -.13l.414 -.414h2v-2h2v-2l2.144 -2.144l-.301 -.301a2.877 2.877 0 0 1 0 -4.069l2.643 -2.643a2.877 2.877 0 0 1 4.069 0z" />
                            <path d="M15 9h.01" />
                          </svg>
                          Details
                        </Link>

                        <Link to="" className='users__menu__dropdown__content'>
                          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-settings" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
                            <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                          </svg>
                          Settings
                        </Link>

                        <Link to="" className='users__menu__dropdown__content' onClick={handleExitFunction}>
                          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-door-exit" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M13 12v.01" />
                            <path d="M3 21h18" />
                            <path d="M5 21v-16a2 2 0 0 1 2 -2h7.5m2.5 10.5v7.5" />
                            <path d="M14 7h7m-3 -3l3 3l-3 3" />
                          </svg>
                          Log Out
                        </Link>
                      </div>
                    </>
                    :
                    null
                }
              </li>
            </div>
          </ul>
        </div>
        <div className={`responsive__menu__container ${responsiveMenu ? "active" : ""}`}>
          {
            usersControl.usersControl ?
              navbarLinksData.map((index: { id: number, path: string, name: string }) => {
                return (
                  <li className={`navbar__item navbar__item--responsive__menu ${index.id === activeIndex.activeIndex ? "active" : ""}`} key={index.id}>
                    <Link to={index.path} onClick={() => handleLinkClick(index.id)}>{index.name}</Link>
                  </li>
                )
              })
              :
              loginUsersNavbarLinksData.map((index: { id: number, path: string, name: string }) => {
                return (
                  <li className={`navbar__item navbar__item--responsive__menu ${index.id === activeIndex.activeIndex ? "active" : ""}`} key={index.id}>
                    <Link to={index.path} onClick={() => handleLinkClick(index.id)}>{index.name}</Link>
                  </li>
                )
              })
          }
        </div>
      </nav>
    </header>
  )
}
