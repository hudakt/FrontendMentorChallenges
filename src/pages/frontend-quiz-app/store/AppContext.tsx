import { createContext } from "react"
import Quiz from "../models/quiz";

export interface ApplicationContext {
    theme: string;
    onThemeToggled: (theme: string) => void;
    quizzesInProgres: QuizzesInProgres;
    selectedTopic: string;
    onTopicChanged: (topic: string) => void;
    quizData: QuizData
}

export interface QuizData {
    [topic: string]: Quiz;
}

interface QuizzesInProgres {
    [topic: string]: {
        points: number;
        currentQuestion: string;
        isFinished: boolean;
    }
}

const AppContext = createContext<ApplicationContext>({
    theme: 'light',
    onThemeToggled: (theme: string) => {},
    quizzesInProgres: {},
    selectedTopic: '',
    onTopicChanged: (topic: string) => {},
    quizData: {}
});

export default AppContext;