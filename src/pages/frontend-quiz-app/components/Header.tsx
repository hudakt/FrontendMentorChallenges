import classes from './Header.module.scss';
import '../styles/appStyles.scss';
import ThemeSwitch from './ThemeSwitch';
import TextIcon from './TextIcon';
import React, { useContext } from 'react';
import AppContext from '../store/AppContext';

interface HeaderProps {
    topic?: string;
}

const Header: React.FC<HeaderProps> = (props) => {

    const { quizData } = useContext(AppContext);
    const iconSrc = props.topic ? quizData[props.topic].icon : undefined;
    
    return (
        <header className={classes.header}>
            <TextIcon iconSrc={iconSrc} title={props.topic} />
            <ThemeSwitch />
        </header>
    )
}

export default Header;