import { createContext } from "react";
import Quiz from "../models/quiz";

export interface ApplicationContext {
   theme: string;
   onThemeToggled: (theme: string) => void;
   selectedTopic: string;
   onTopicChanged: (topic: string) => void;
   quizData: QuizData;
}

export interface QuizData {
   [topic: string]: Quiz;
}

const AppContext = createContext<ApplicationContext>({
   theme: "light",
   onThemeToggled: (theme: string) => {},
   selectedTopic: "",
   onTopicChanged: (topic: string) => {},
   quizData: {},
});

export default AppContext;
