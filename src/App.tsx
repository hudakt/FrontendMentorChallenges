import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.scss';
import Shell from './pages/shell/Shell';
import FrontendQuizApp from './pages/frontend-quiz-app/FrontendQuizApp';

const router = createBrowserRouter([
  {
    path: '',
    element: <Shell />
  },
  {
    path: 'frontend-quiz-app',
    element: <FrontendQuizApp />
  }
]);

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
