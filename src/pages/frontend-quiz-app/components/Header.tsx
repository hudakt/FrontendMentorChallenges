import classes from './Header.module.scss';
import '../styles/appStyles.scss';
import ThemeSwitch from './ThemeSwitch';
import TextIcon from './TextIcon';

const Header = () => {
    return (
        <header className={classes.header}>
            <TextIcon />
            <ThemeSwitch />
        </header>
    )
}

export default Header;