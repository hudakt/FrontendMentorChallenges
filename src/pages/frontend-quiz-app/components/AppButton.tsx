import React from 'react';
import classes from './AppButton.module.scss';

interface AppButtonProps {
    title: string;
    onButtonClicked: () => void;
}

const AppButton: React.FC<AppButtonProps> = (props) => {
    return (
        <button className={classes.appButton} onClick={props.onButtonClicked}>{props.title}</button>
    )
}

export default AppButton;