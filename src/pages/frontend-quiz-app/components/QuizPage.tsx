import { useParams } from "react-router-dom";
import AppContext from "../store/AppContext";
import React, { useContext, useEffect, useRef, useState } from "react";
import PageContainer from "./PageContainer";
import AppButton from "./AppButton";
import QuizOption from "./QuizOption";
import errIcon from "../assets/images/icon-error.svg";
import Heading from "./Heading";
import TextIcon from "./TextIcon";

const QuizPage = () => {
   const params = useParams();
   const { quizData, onTopicChanged } = useContext(AppContext);

   useEffect(() => {
      onTopicChanged(params.topic ? params.topic : "");
   });

   const [currentQuestionNum, setCurrentQuestionNum] = useState(1);
   const [answerSubmitted, setAnswerSubmitted] = useState(false);
   const [showErrMsg, setShowErrMsg] = useState(false);
   const [selectedAnswer, setSelectedAnswer] = useState("");
   const [score, setScore] = useState(0);
   const [quizFinished, setQuizFinished] = useState(false);

   const errMsgRef = useRef<HTMLParagraphElement>(null);

   const topic = params.topic;
   if (!topic) return null;

   const quizTopicData = quizData[topic];
   if (!quizTopicData) return null;

   let questionCount = quizTopicData.questions.length;
   let currentQuestion = quizTopicData.questions[currentQuestionNum - 1];

   const handleAnswerSubmit = (event: any) => {
      if (event.target) {
         event.preventDefault();
      }

      if (selectedAnswer) {
         if (currentQuestion.isAnswerValid(selectedAnswer)) {
            setScore(score + 1);
         }

         setAnswerSubmitted(true);
         setShowErrMsg(false);
      } else {
         setShowErrMsg(true);
         setAnswerSubmitted(false);
         if (errMsgRef.current) {
            const classList = errMsgRef.current.classList;
            if (classList.contains("hidden")) {
               classList.remove("hidden");
            }
            if (classList.contains("animate")) {
               classList.remove("animate");
            }
            setTimeout(() => {
               classList.add("animate");
            }, 0);
         }
      }
   };

   const handleNextQuestion = (
      event: React.MouseEvent<HTMLButtonElement, MouseEvent>
   ) => {
      event.preventDefault();
      event.stopPropagation();

      if (currentQuestionNum === questionCount) {
         setQuizFinished(true);
      } else {
         setCurrentQuestionNum(currentQuestionNum + 1);
         setAnswerSubmitted(false);
         setSelectedAnswer("");
      }
   };

   const handleSelectedAnswerChanged = (
      event: React.ChangeEvent,
      value: string
   ) => {
      setSelectedAnswer(value);
   };

   const handlePlayAgain = (
      event: React.MouseEvent<HTMLButtonElement, MouseEvent>
   ) => {
      event.preventDefault();
      event.stopPropagation();

      setCurrentQuestionNum(1);
      setAnswerSubmitted(false);
      setShowErrMsg(false);
      setSelectedAnswer("");
      setScore(0);
      setQuizFinished(false);
   };

   const getOptionState = (optionValue: string) => {
      if (!answerSubmitted) return "default";

      if (currentQuestion.isAnswerValid(optionValue)) {
         return "correct";
      } else {
         return "wrong";
      }
   };

   return (
      <form onSubmit={handleAnswerSubmit}>
         <PageContainer>
            {quizFinished ? (
               <Heading
                  regularHeadingValue='Quiz completed'
                  boldHeadingValue='You scored...'
               />
            ) : (
               <section className='justify-between'>
                  <div>
                     <p className='app-font-body-s-italic mb-3 md:mb-7'>{`Question ${currentQuestionNum} of ${questionCount}`}</p>
                     <h2 className='app-font-heading-m app-font-bold mb-6 md:mb-10'>
                        {currentQuestion.question}
                     </h2>
                  </div>
                  <progress value={currentQuestionNum} max={questionCount} />
               </section>
            )}
            {quizFinished ? (
               <section className='quiz-summary'>
                  <TextIcon
                     title={quizTopicData.title}
                     iconSrc={quizTopicData.icon}
                  />
                  <h2 className='app-font-display my-4 md:mt-10 md:mb-4'>
                     {score}
                  </h2>
                  <p className='app-font-body-m'>{`out of ${questionCount}`}</p>
               </section>
            ) : (
               <section>
                  {currentQuestion.options.map((option, index) => (
                     <QuizOption
                        key={index}
                        selected={option.value === selectedAnswer}
                        optionValue={option.value}
                        optionLetter={option.optionLetter}
                        onOptionClicked={handleSelectedAnswerChanged}
                        disabled={answerSubmitted}
                        state={getOptionState(option.value)}
                     />
                  ))}
               </section>
            )}
            <div className='button-wrapper'>
               {quizFinished ? (
                  <AppButton
                     title={"Play again"}
                     onButtonClicked={(e) => handlePlayAgain(e)}
                  />
               ) : answerSubmitted ? (
                  <AppButton
                     title={
                        currentQuestionNum === questionCount
                           ? "Finish Quiz"
                           : "Next Question"
                     }
                     onButtonClicked={(e) => handleNextQuestion(e)}
                  />
               ) : (
                  <AppButton
                     title={"Submit answer"}
                     onButtonClicked={(e) => {}}
                  />
               )}
               <p
                  className={
                     showErrMsg ? "error-message" : "error-message hidden"
                  }
                  ref={errMsgRef}
               >
                  <img src={errIcon} alt='Error icon' />
                  <span>Please select an answer</span>
               </p>
            </div>
         </PageContainer>
      </form>
   );
};

export default QuizPage;
