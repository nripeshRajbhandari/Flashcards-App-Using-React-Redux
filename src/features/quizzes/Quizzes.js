import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ROUTES from "../../app/routes";
// import quiz selector
import { selectQuizzes } from './quizzesSlice';

export default function Quizzes() {

  const quizzes = useSelector(selectQuizzes); // replace this with a call to your selector to get all the quizzes in state
  // console.log(`quizzes are: ${quizzes}`);
  // const keys = Object.keys(quizzes);
  // console.log(quizzes[keys[0]]);

  console.log('extracting quiz details');
  Object.values(quizzes).forEach(quiz => console.log(quiz.id));

  return (
    <section className="center">
      <h1>Quizzes</h1>
      <ul className="quizzes-list">
        {Object.values(quizzes).map((quiz) => (          
          <Link key={quiz.id} to={ROUTES.quizRoute(quiz.id)}>
            <li className="quiz">{quiz.name}</li>
          </Link>        
        ))}
      </ul>
      <Link to={ROUTES.newQuizRoute()} className="button">
        Create New Quiz
      </Link>
    </section>
  );
}
