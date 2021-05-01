import React from 'react';
import netflix from './netflix.svg';
import usericon from './user-icon.jpg';
import './Header.css';

export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
               <a href="/">
                   <img src={netflix} alt="Netflix" />
               </a>
            </div> 
            <div className="header--user">
                <a href="/">
                    <img src={usericon} alt="User" />
                </a>
            </div>
        </header>
    );
}