import { useEffect, useState } from "react";
import favicon from './assets/images/favicon-32x32.png';
import { initTitleAndIcon } from "../../common/effectFunctions";
import classes from './FrontendQuizApp.module.scss';
import Header from "./components/Header";
import AppContext from "./store/AppContext";
import './styles/appStyles.scss';
import { Outlet } from "react-router-dom";

const FrontendQuizApp = () => {
    useEffect(() => {
        initTitleAndIcon(favicon, 'Frontend Mentor | Frontend quiz app');
    }, []);

    let savedTheme = window.localStorage.getItem('theme');
    if (!savedTheme) {
        savedTheme = 'light';
    }

    const [theme, setTheme] = useState(savedTheme);

    const handleThemeChanged = (theme: string) => {
        window.localStorage.setItem('theme', theme);
        setTheme(theme);
    }

    const ctxValue = {
        theme: theme,
        onThemeToggled: handleThemeChanged 
    }

    return (
        <AppContext.Provider value={ctxValue}>
            <div className="min-h-screen flex justify-center items-center">
                <div className={`${classes.appRoot} ${theme}`}>
                    <Header />
                    <Outlet/>
                </div>
            </div>
        </AppContext.Provider>
    )
}

export default FrontendQuizApp;