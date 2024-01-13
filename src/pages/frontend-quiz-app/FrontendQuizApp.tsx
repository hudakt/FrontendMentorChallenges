import { useEffect, useState } from "react";
import favicon from "./assets/images/favicon-32x32.png";
import { initTitleAndIcon } from "../../common/effectFunctions";
import classes from "./FrontendQuizApp.module.scss";
import Header from "./components/Header";
import AppContext, { ApplicationContext, QuizData } from "./store/AppContext";
import "./styles/appStyles.scss";
import { Outlet } from "react-router-dom";
import data from "./data.json";
import Quiz from "./models/quiz";

const FrontendQuizApp = () => {
   useEffect(() => {
      initTitleAndIcon(favicon, "Frontend Mentor | Frontend quiz app");
   }, []);

   let savedTheme = window.localStorage.getItem("theme");
   if (!savedTheme) {
      savedTheme = "light";
   }

   const [theme, setTheme] = useState(savedTheme);
   const [topic, setTopic] = useState("");

   const handleThemeChanged = (theme: string) => {
      window.localStorage.setItem("theme", theme);
      setTheme(theme);
   };

   const handleTopicChanged = (topic: string) => {
      setTopic(topic);
   };

   const quizArray = data.quizzes.map((q) => new Quiz(q));
   let quizData: QuizData = {};

   for (let quiz of quizArray) {
      quizData[quiz.title] = quiz;
   }

   const ctxValue: ApplicationContext = {
      theme: theme,
      onThemeToggled: handleThemeChanged,
      selectedTopic: "",
      onTopicChanged: handleTopicChanged,
      quizData,
   };

   return (
      <AppContext.Provider value={ctxValue}>
         <div className='min-h-screen flex justify-center items-center'>
            <div className={`${classes.appRoot} ${theme}`}>
               <Header topic={topic} />
               <Outlet />
            </div>
         </div>
      </AppContext.Provider>
   );
};

export default FrontendQuizApp;
