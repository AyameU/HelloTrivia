import React, { useState, useEffect } from "react";
import {
  AddValueToArrayAtRandomIndex,
  RenderHTML
} from "../utils/UtilityFunctions";

// 1. Display question
// 2. User clicks a button
// 3. Disable buttons?
// 4. Validate choice
// 5. If correct yay!, if incorrect boo!
// 6. setCompleted + 1

// Multiple choice
// Grab incorrect answers array
// Create new array and add correct answer in random index.
// Map over that index to display radioboxes.

export default function Question({
  q,
  answered,
  setAnswered,
  score,
  setScore
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
        <div className="field is-grouped is-justify-content-center">
          <button name="True" id="True" value="True" onClick={validateChoice}>
            True
          </button>
          <span className="mx-3 is-align-self-center">OR</span>
          <button
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
        <>
          {multipleAnswers.map((answer, key) => (
            <div className="field">
              <label htmlFor="answers">
                <input
                  className="mr-1"
                  type="radio"
                  name="answers"
                  key={key}
                  value={answer}
                  onClick={validateChoice}
                  required
                ></input>
                {RenderHTML(answer)}
              </label>
            </div>
          ))}
        </>
      );
    }
  }

  // Set the
  useEffect(() => {
    if (type === "boolean") {
      document.querySelector("#True").className = "is-large button";
      document.querySelector("#False").className = "is-large button";
    }

    // Sets answered to false after each new question is rendered.
    setAnswered(false);
  }, [q]);

  return (
    <div className="card">
      <div className="card-content has-text-centered has-background-warning">
        <p className="subtitle">Question {answered}</p>
        <p className="title is-3">{RenderHTML(question)}</p>
        <form className="is-inline-block">
          <div className="has-text-left">{setQuestionControls()}</div>
        </form>
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
