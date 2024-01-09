import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.scss';
import Shell from './pages/shell/Shell';
import FrontendQuizApp from './pages/frontend-quiz-app/FrontendQuizApp';
import HomePage from './pages/frontend-quiz-app/components/HomePage';
import QuizPage from './pages/frontend-quiz-app/components/QuizPage';

const router = createBrowserRouter([
  {
    path: '',
    element: <Shell />
  },
  {
    path: '/frontend-quiz-app',
    element: <FrontendQuizApp />,
    children: [
      {
        path: '/frontend-quiz-app',
        element: <HomePage />
      },
      {
        path: '/frontend-quiz-app/quiz/:topic',
        element: <QuizPage />
      }
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
