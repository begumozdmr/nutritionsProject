import React from 'react';

export default function PageLoad() {
    return (
        <div className='full__width__background--page__load'>
            <div className='navbar__logo navbar__logo--load__page'>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plant-2 page__load__icon" width="60" height="60" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" />
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
            </div>
        </div>
    )
}