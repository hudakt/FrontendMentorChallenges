import { useEffect } from "react";
import favicon from './assets/images/favicon-32x32.png';
import { initTitleAndIcon } from "../../common/effectFunctions";
import classes from './FrontendQuizApp.module.scss';
import Heading from "./components/Heading";
import Header from "./components/Header";

const FrontendQuizApp = () => {
    useEffect(() => {
        initTitleAndIcon(favicon, 'Frontend Mentor | Frontend quiz app');
    }, []);

    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className={classes.appRoot}>
                <Header />
                <Heading regularHeadingValue="Welcome to the" boldHeadingValue="Frontend Quiz!" caption="Pick a subject to get started"/>
            </div>
        </div>
    )
}

export default FrontendQuizApp;