import classes from './Header.module.scss';
import '../styles/appStyles.scss';
import React from 'react';
import ThemeSwitch from './ThemeSwitch';

interface HeaderProps {
    iconSrc?: string;
    iconClass?: string;
    title?: string;
}

const Header: React.FC<HeaderProps> = (props) => {
    return (
        <div className={classes.header}>
            <div className='flex justify-start align-middle'>
                <div className={`${classes.imageWrapper} ${props.iconClass}`}>
                    <img src={props.iconSrc} alt="" />
                </div>
                <h1 className='app-heading-s'>{props.title}</h1>
            </div>
            <ThemeSwitch />
        </div>
    )
}

export default Header;