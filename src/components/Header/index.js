import React from 'react';
import './styles.css';

// eslint-disable-next-line import/no-anonymous-default-export
export default ({black})=>{
    return(
        <header className={black ?"black" : ''}>
            <div className="header--logo">
                <img src="/imgs/Netflix_Logo_RGB.png"/>
            </div>
            <div className="header--user">
                <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"/>
            </div>
        </header>
    )
}