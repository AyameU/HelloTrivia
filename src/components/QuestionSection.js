import { useEffect, useState } from "react";
import Question from "./Question";

// 1. Show first question
// 2. User clicks a button to make a choice
// 3. choice is validated
// 4. depending on outcome show a Yay or Nay message
// 5. Increment completedQuestions by 1
// 6. Hide old question
// 7. Show next question (could use completedQuestions to get index of array)

export default function Questions({ questions }) {
  const [completedQuestions, setCompletedQuestions] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);

  console.log("Completed: " + completedQuestions + " | " + questions.length);
  console.log("Score: " + score + " | " + questions.length);
  function triviaTime() {
    if (completedQuestions < questions.length) {
      return (
        <Question
          q={questions[completedQuestions]}
          answered={answered}
          setAnswered={setAnswered}
          score={score}
          setScore={setScore}
        />
      );
    }
    if (completedQuestions === questions.length) {
      return (
        <div className="container has-text-centered">
          <p>Good job! Setup your game to play again!</p>
        </div>
      );
    }
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
    <>
      <section className="container has-text-centered my-5">
        <h4 className="subtitle is-6">Current Score</h4>
        <p className="title is-4">
          {score} out of {questions.length}
        </p>
      </section>
      <section>{triviaTime()}</section>
    </>
  );
}
