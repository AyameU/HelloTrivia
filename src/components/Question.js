import React, { useEffect } from "react";
import {
  AddValueToArrayAtRandomIndex,
  RenderHTML
} from "../utils/UtilityFunctions";

export default function Question({
  q,
  setAnswered,
  setScore,
  completedQuestions
}) {
  const {
    category,
    correct_answer,
    difficulty,
    incorrect_answers,
    question,
    type
  } = q;

  // Creates a new array with the correct and incorrect answers.
  // Correct answer is randomly placed within the new array.
  let multipleAnswers;

  if (type === "multiple") {
    multipleAnswers = AddValueToArrayAtRandomIndex(
      incorrect_answers,
      correct_answer
    );
  }

  // Validates the user's choice and updates the answered state.
  function validateChoice(e) {
    e.preventDefault();

    const target = e.target;

    if (target.value === correct_answer) {
      setScore((score) => score + 1);

      if (type === "boolean")
        target.classList.add("has-text-white", "has-background-success");
    } else {
      if (type === "boolean")
        target.classList.add("has-text-white", "has-background-danger");
    }

    setAnswered(true);
  }

  // Creates True or False buttons or radio buttons,
  //depending on the question format.
  function setQuestionControls() {
    if (type === "boolean") {
      return (
        <div className="field is-grouped-centered">
          <button
            className="button has-background-light is-large button"
            name="True"
            id="True"
            value="True"
            onClick={validateChoice}
          >
            True
          </button>
          <span className="mx-3 is-align-self-center">OR</span>
          <button
            className="button has-background-light is-large button"
            name="False"
            id="False"
            value="False"
            onClick={validateChoice}
          >
            False
          </button>
        </div>
      );
    } else if (type === "multiple") {
      return (
        <div className="buttons is-centered">
          {multipleAnswers.map((answer, key) => (
            <button
              className="button has-background-light is-large button"
              name="answers"
              key={key}
              value={answer}
              onClick={validateChoice}
              required
            >
              {answer}
            </button>
          ))}
        </div>
      );
    }
  }

  useEffect(() => {
    // Sets answered to false after each new question is rendered.
    setAnswered(false);
  }, [q]);

  return (
    <div className="card">
      <div className="card-content has-text-centered">
        <p className="subtitle">Question {completedQuestions + 1}</p>
        <p className="title is-3">{RenderHTML(question)}</p>
        <form>{setQuestionControls()}</form>
      </div>
      <div className="card-footer">
        <p className="card-footer-item has-text-white has-background-success">
          Category | {category}
        </p>
        <p className="card-footer-item has-text-white has-background-info">
          Difficulty | {difficulty}
        </p>
      </div>
    </div>
  );
}
