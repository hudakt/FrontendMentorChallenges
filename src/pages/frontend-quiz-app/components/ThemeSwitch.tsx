import classes from './ThemeSwitch.module.scss';
import sunIconDark from '../assets/images/icon-sun-dark.svg';
import sunIconLight from '../assets/images/icon-sun-light.svg';
import moonIconDark from '../assets/images/icon-moon-dark.svg';
import moonIconLight from '../assets/images/icon-moon-light.svg';
import { useState } from 'react';

const ThemeSwitch = () => {
    const [toggledDarkTheme, setToggledDarkTheme] = useState(false);

    const handleThemeChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
        setToggledDarkTheme(e.target.checked);
    }

    const sunIcon = toggledDarkTheme ? sunIconLight : sunIconDark;
    const moonIcon = toggledDarkTheme ? moonIconLight : moonIconDark;

    return (
        <div className={classes.themeSwithWrapper}>
            <img className={classes.sunIcon} src={sunIcon} alt="Sun icon" />
            <label className={classes.themeSwitcher}>
                <input type="checkbox" onChange={handleThemeChanged} />
                <span className={classes.slider}></span>
            </label>
            <img className={classes.moonIcon} src={moonIcon} alt="Moon icon" />
        </div>
    )
}

export default ThemeSwitch;