import { useEffect, useState } from "react";
import Question from "./Question";
import { BiArrowBack, BiTrophy, BiGhost } from "react-icons/bi";

// 1. Show first question
// 2. User clicks a button to make a choice
// 3. choice is validated
// 4. depending on outcome show a Yay or Nay message
// 5. Increment completedQuestions by 1
// 6. Hide old question
// 7. Show next question (could use completedQuestions to get index of array)

export default function Questions({ questions, setQuestions, setQuery }) {
  const [completedQuestions, setCompletedQuestions] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);

  function triviaTime() {
    if (completedQuestions < questions.length) {
      return (
        <Question
          q={questions[completedQuestions]}
          setAnswered={setAnswered}
          setScore={setScore}
          completedQuestions={completedQuestions}
        />
      );
    }
    if (completedQuestions === questions.length) {
      // End of game text changes depending on outcomes.
      if (score === questions.length) {
        return (
          <div className="container">
            <p className="is-flex is-align-items-center is-justify-content-center">
              <BiTrophy />
              &nbsp;100%! Great job! Setup your game to play again!
            </p>
          </div>
        );
      } else if (score === 0) {
        return (
          <div className="container">
            <p className="is-flex is-align-items-center is-justify-content-center">
              You lose... your head!&nbsp;
              <BiGhost />
              &nbsp;Kidding... Setup your game to play again!
            </p>
          </div>
        );
      } else {
        return (
          <div className="container has-text-centered">
            <p>Good job! Setup your game to play again!</p>
          </div>
        );
      }
    }
  }

  function closeGame(e) {
    e.preventDefault();

    setQuestions(null);
    setQuery("");
  }

  // Sets the completedQuestions, Answered and Score states to their initial state when the question bank is updated.
  useEffect(() => {
    setCompletedQuestions(0);
    setAnswered(false);
    setScore(0);
  }, [questions]);

  // Tracks how many questions have been answered.
  useEffect(() => {
    answered &&
      setCompletedQuestions(
        (previouslyCompletedQuestions) => previouslyCompletedQuestions + 1
      );
  }, [answered]);

  return (
    <section id="questions">
      <div className="container has-text-centered my-5">
        <h4 className="subtitle is-6">Current Score</h4>
        <p className="title is-4">
          {score} out of {questions.length}
        </p>
      </div>

      <div>{triviaTime()}</div>

      <div className="has-text-centered mt-5">
        <button
          className="button closeGame has-background-danger has-text-white"
          onClick={closeGame}
        >
          <BiArrowBack size="2rem" color="white" />
          &nbsp; Return to Setup
        </button>
      </div>
    </section>
  );
}
