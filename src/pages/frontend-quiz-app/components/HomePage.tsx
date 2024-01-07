import Heading from "./Heading"
import data from '../data.json';
import Quiz from "../models/quiz";
import TextIcon from "./TextIcon";
import classes from './HomePage.module.scss';
import { Link } from "react-router-dom";

const HomePage = () => {
    const quizData = data.quizzes.map((q) => new Quiz(q));

    return (
        <div className="flex flex-col md:justify-between md:flex-row">
            <Heading regularHeadingValue="Welcome to the" boldHeadingValue="Frontend Quiz!" caption="Pick a subject to get started" />
            <div className={classes.optionsWrapper}>
                {quizData.map((quiz, index) =>
                    <Link to='quiz' key={index} className="quiz-option">
                        <TextIcon key={index} iconSrc={quiz.icon} title={quiz.title} />
                    </Link>
                )}
            </div>
        </div>
    )
}

export default HomePage;