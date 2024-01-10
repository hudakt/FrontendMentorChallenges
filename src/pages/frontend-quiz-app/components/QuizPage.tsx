import { useParams } from "react-router-dom";
import AppContext from "../store/AppContext";
import { useContext, useEffect } from "react";
import TextIcon from "./TextIcon";
import PageContainer from "./PageContainer";
import AppButton from "./AppButton";

const QuizPage = () => {
    const params = useParams();
    const { quizData, onTopicChanged } = useContext(AppContext);
    
    useEffect(() => {
        onTopicChanged(params.topic ? params.topic : '');
    });

    const topic = params.topic;
    if (!topic) return null;
    
    const quizTopicData = quizData[topic];
    if (!quizTopicData) return null;
    
    const handleAnswerSubmit = () => {
        console.log('keket');
    }

    let currentQuestionNum = 1;
    let questionCount = quizTopicData.questions.length;
    let currentQuestion = quizTopicData.questions[currentQuestionNum - 1];

    return (
        <PageContainer>
            <section className="justify-between">
                <div>
                    <p className="app-font-body-s-italic mb-3 md:mb-7">{`Question ${currentQuestionNum} of ${questionCount}`}</p>
                    <h2 className="app-font-heading-m app-font-bold mb-6 md:mb-10">{currentQuestion.question}</h2>
                </div>
                <progress value={currentQuestionNum} max={questionCount}/>
            </section>
            <section>
                <ul>
                    {currentQuestion.options.map((option, index) => 
                        <li className="quiz-option" key={index} >
                            <TextIcon title={option.value} optionLetter={option.optionLetter} />
                        </li>
                    )}
                </ul>
            </section>
            <AppButton title="Submit Answer" onButtonClicked={handleAnswerSubmit}/>
        </PageContainer>
    )
}

export default QuizPage;