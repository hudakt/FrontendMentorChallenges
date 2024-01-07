import classes from './ThemeSwitch.module.scss';
import sunIconDark from '../assets/images/icon-sun-dark.svg';
import sunIconLight from '../assets/images/icon-sun-light.svg';
import moonIconDark from '../assets/images/icon-moon-dark.svg';
import moonIconLight from '../assets/images/icon-moon-light.svg';
import { useContext } from 'react';
import AppContext from '../store/AppContext';

const ThemeSwitch = () => {
    const { theme, onThemeToggled } = useContext(AppContext);

    const handleThemeChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
        const themeValue = e.target.checked ? 'dark' : 'light';
        onThemeToggled(themeValue);
    }

    let sunIcon;
    let moonIcon;
    let btnChecked;

    if (theme === 'light') {
        sunIcon = sunIconDark;
        moonIcon = moonIconDark;
        btnChecked = false;
    } else {
        sunIcon = sunIconLight;
        moonIcon = moonIconLight;
        btnChecked = true;
    }

    return (
        <div className={classes.themeSwithWrapper}>
            <img className={classes.sunIcon} src={sunIcon} alt="Sun icon" />
            <label className={classes.themeSwitcher}>
                <input type="checkbox" onChange={handleThemeChanged} checked={btnChecked} />
                <span className={classes.slider}></span>
            </label>
            <img className={classes.moonIcon} src={moonIcon} alt="Moon icon" />
        </div>
    )
}

export default ThemeSwitch;