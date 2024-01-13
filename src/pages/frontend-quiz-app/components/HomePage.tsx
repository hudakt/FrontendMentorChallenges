import Heading from "./Heading";
import TextIcon from "./TextIcon";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import AppContext from "../store/AppContext";
import PageContainer from "./PageContainer";

const HomePage = () => {
   const { quizData, onTopicChanged } = useContext(AppContext);

   useEffect(() => {
      onTopicChanged("");
   });

   const quizArray = [];
   for (let quiz in quizData) {
      quizArray.push(quizData[quiz]);
   }

   return (
      <PageContainer>
         <Heading
            regularHeadingValue='Welcome to the'
            boldHeadingValue='Frontend Quiz!'
            caption='Pick a subject to get started'
         />
         <section>
            {quizArray.map((quiz, index) => (
               <Link
                  to={`quiz/${quiz.title}`}
                  key={index}
                  className='quiz-option-common'
               >
                  <TextIcon
                     key={index}
                     iconSrc={quiz.icon}
                     title={quiz.title}
                  />
               </Link>
            ))}
         </section>
      </PageContainer>
   );
};

export default HomePage;
