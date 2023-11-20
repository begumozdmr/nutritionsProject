import { ContextProvider } from 'context/contextProvider';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

interface PropsType {
    page: string
};

export default function PageHeader({ page }: PropsType) {

    const { darkThemeControl } = useContext(ContextProvider);

    return (
        <>
            <header className={`page__content page__content--about ${darkThemeControl.darkThemeControl ? "dark" : ""}`}>
                <div className='container'>
                    <div className='row'>
                        <div className='page__header__comment page__header__comment--about'>
                            <h1 className='page__subtitle'>{page}</h1>
                            <div className='page__header__subtitle__comment'>
                                <Link to="/">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-home" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
                                        <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                                        <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
                                    </svg>
                                    Home /
                                </Link>
                                <h6>{page}</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </>

    )
}
