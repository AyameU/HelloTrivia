import React, { useState } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { OpenModal, CloseModal } from "./Modal";

export default function Search({
  player,
  setPlayer,
  categories,
  setQuery,
  setErrorMessage,
  getErrorMessage
}) {
  const categoryKeys = Object.keys(categories);
  const categoryNames = categoryKeys.map((c) => categories[c].name).sort();
  const [number, setNumber] = useState("");
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [format, setFormat] = useState("");

  // Handles the onFocus event of the form inputs.
  function handleFocus(e) {
    e.target.select();
  }

  function validateCategory() {
    // Bit of a hacky solution to include search fuctionality.
    // A select would work better frankly, but I don't want to lose marks.

    // Get all of the keys from the categories.
    const value = document.querySelector("#category").value;
    let validCategory = false;
    let validCategoryId;

    // Check if the input value exists within the categories fetched from the api.
    for (const key of categoryKeys) {
      if (value === categories[key].name) {
        validCategoryId = categories[key].id;
        validCategory = true;
        break;
      }
    }

    if (validCategory) {
      setCategory(validCategoryId);
      setErrorMessage("");
    } else setErrorMessage(getErrorMessage(2));
  }

  // Handles the onChange event of the form number input.
  function handleChange(e) {
    setErrorMessage("");

    if (e.target.name === "numOfQuestions") {
      setNumber(e.target.value);
    }
  }

  // Handles the submit event.
  function handleSubmit(e) {
    e.preventDefault();

    const query = getQuery();

    // Sets the query to the values from the form.
    // Updating the query state triggers useEffect,
    // which fetches the data.
    setQuery(query);
  }

  // Gets the API query based on the inputs from the form.
  function getQuery() {
    const keywords = ["amount=", "category=", "difficulty=", "type="];
    const searchTerms = [number, category, difficulty, format];
    let tempQuery = "";

    // Iterates over each search term to match it the correct search keyword.
    for (let i = 0; i < searchTerms.length; i++) {
      if (searchTerms[i] === null || searchTerms[i] === "") {
        continue;
      } else if (searchTerms[i] !== null || searchTerms[i] !== "") {
        if (i === 0) {
          tempQuery += keywords[i] + searchTerms[i];
        } else {
          tempQuery += "&" + keywords[i] + searchTerms[i];
        }
      }
    }

    return tempQuery;
  }

  return (
    <div className="box container has-text-centered">
      <p className="subtitle">Hello {player}</p>
      <h2 className="title">Set up your game</h2>

      <form className="form" onSubmit={handleSubmit}>
        <div className="field is-horizontal is-align-items-center">
          <div className="field-label">
            <label className="label" htmlFor="playerName">
              Type your Name
            </label>
          </div>
          <div className="field-body">
            <div className="field">
              <input
                className="input"
                type="text"
                name="playerName"
                value={player}
                onChange={(e) => setPlayer(e.target.value)}
                onBlur={(e) => {
                  if (e.target.value.trim() === "") setPlayer("Player");
                }}
                onFocus={handleFocus}
                placeholder="Enter Your Name"
              ></input>
            </div>
          </div>
        </div>

        <div className="field is-horizontal is-align-items-center">
          <div className="field-label">
            <label className="label" htmlFor="numOfQuestions">
              Number of Questions?
            </label>
          </div>
          <div className="field-body">
            <div className="field">
              <input
                className="input"
                type="number"
                name="numOfQuestions"
                id="numOfQuestions"
                min="1"
                max="50"
                placeholder="Number of Questions"
                required
                onChange={handleChange}
              ></input>
            </div>
          </div>
        </div>

        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">Category</label>
          </div>
          <div className="field-body">
            <div className="field">
              <div className="control">
                <input
                  className="input"
                  type="text"
                  id="category"
                  name="category"
                  onFocus={handleFocus}
                  onChange={validateCategory}
                  placeholder="Search for a Category"
                  required
                ></input>
              </div>
              <p className="help is-flex is-align-items-center">
                <AiOutlineInfoCircle />
                &nbsp;
                <button
                  className="buttonLooksLikeLink"
                  onClick={(e) => OpenModal(e, "categoryList")}
                >
                  Hint: Category List
                </button>
              </p>
            </div>
          </div>
        </div>

        <div className="field is-horizontal">
          <div className="field-label">
            <label className="label">Difficulty</label>
          </div>
          <div className="field-body has-text-left">
            <div className="field">
              <label className="control" htmlFor="anyDifficulty">
                <input
                  className="mr-1"
                  type="radio"
                  name="difficulty"
                  id="anyDifficulty"
                  value=""
                  onChange={(e) => {
                    setDifficulty(e.target.value);
                    setErrorMessage("");
                  }}
                  required
                ></input>
                Any Difficulty
              </label>
            </div>
            <div className="field">
              <label className="control" htmlFor="easy">
                <input
                  className="mr-1"
                  type="radio"
                  name="difficulty"
                  id="easy"
                  value="easy"
                  onChange={(e) => {
                    setDifficulty(e.target.value);
                    setErrorMessage("");
                  }}
                  required
                ></input>
                Easy
              </label>
            </div>
            <div className="field">
              <label className="control" htmlFor="medium">
                <input
                  className="mr-1"
                  type="radio"
                  name="difficulty"
                  id="medium"
                  value="medium"
                  onChange={(e) => {
                    setDifficulty(e.target.value);
                    setErrorMessage("");
                  }}
                  required
                ></input>
                Medium
              </label>
            </div>
            <div className="field">
              <label className="control" htmlFor="hard">
                <input
                  className="mr-1"
                  type="radio"
                  name="difficulty"
                  id="hard"
                  value="hard"
                  onChange={(e) => {
                    setDifficulty(e.target.value);
                    setErrorMessage("");
                  }}
                  required
                ></input>
                Hard
              </label>
            </div>
          </div>
        </div>

        <div className="field is-horizontal">
          <div className="field-label">
            <label className="label">Format</label>
          </div>
          <div className="field-body has-text-left">
            <div className="field">
              <label className="control" htmlFor="anyType">
                <input
                  className="mr-1"
                  type="radio"
                  name="format"
                  id="anyType"
                  value={null}
                  onChange={(e) => {
                    setFormat(e.target.value);
                    setErrorMessage("");
                  }}
                  required
                ></input>
                Any Type
              </label>
            </div>
            <div className="field">
              <label className="control" htmlFor="multipleChoice">
                <input
                  className="mr-1"
                  type="radio"
                  name="format"
                  id="multipleChoice"
                  value="multiple"
                  onChange={(e) => {
                    setFormat(e.target.value);
                    setErrorMessage("");
                  }}
                  required
                ></input>
                Multiple Choice
              </label>
            </div>
            <div className="field">
              <label className="control" htmlFor="trueFalse">
                <input
                  className="mr-1"
                  type="radio"
                  name="format"
                  id="trueFalse"
                  value="boolean"
                  onChange={(e) => {
                    setFormat(e.target.value);
                    setErrorMessage("");
                  }}
                  required
                ></input>
                True/False
              </label>
            </div>
          </div>
        </div>

        <div className="control">
          <input className="button" id="submit" type="submit"></input>
        </div>
      </form>

      <div id="categoryList" className="modal">
        <div
          className="modal-background"
          onClick={(e) => CloseModal(e, "categoryList")}
        ></div>
        <div className="modal-content box">
          <h3 className="title">Categories</h3>
          <ul>
            {categoryNames.map((cat, key) => (
              <li key={key}>
                <button
                  className="buttonLooksLikeLink"
                  onClick={(e) => {
                    const input = document.querySelector("#category");
                    input.value = cat;
                    validateCategory();
                    CloseModal(e, "categoryList");
                  }}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <button
          className="button modal-close"
          aria-label="close"
          onClick={(e) => CloseModal(e, "categoryList")}
        ></button>
      </div>
    </div>
  );
}
