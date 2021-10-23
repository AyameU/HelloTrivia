import React, { useEffect, useState } from "react";

// ToDo
// 1. Get search query DONE
// 2. Fetch data
// 3. Save data to State object
// 3. Display data

export default function Search({
  player,
  setPlayer,
  categories,
  query,
  setQuery,
  setErrorMessage,
  setQuestions
}) {
  const [number, setNumber] = useState("");
  const [category, setCategory] = useState(null);
  const [difficulty, setDifficulty] = useState("");
  const [format, setFormat] = useState("");

  // Handles the onFocus event of the player name input.
  function handleFocus(e) {
    e.target.select();
  }

  // Handles the onChange event of the form inputs.
  function handleChange(e) {
    switch (e.target.name) {
      case "numOfQuestions":
        setNumber(e.target.value);
        break;
      case "difficulty":
        e.target.checked && e.target.name !== "anyDifficulty"
          ? setDifficulty(e.target.value)
          : setDifficulty(null);
        break;
      case "format":
        e.target.value !== "any" && e.target.checked
          ? setFormat(e.target.value)
          : setFormat(null);
        break;
      case "playerName":
        if (e.target.value !== "") setPlayer(e.target.value);
        else setPlayer("Player");
        break;
      default:
        break;
    }
  }

  // Handles the submit event.
  function handleSubmit(e) {
    e.preventDefault();

    // Sets the query to the values from the form.
    // Updating the query state triggers useEffect,
    // which fetches the data.
    setQuery(getQuery());
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
      } else if (searchTerms[i] !== "") {
        if (i === 0) {
          tempQuery += keywords[i] + searchTerms[i];
        } else {
          tempQuery += "&" + keywords[i] + searchTerms[i];
        }
      }
    }

    return tempQuery;
  }

  // Gets the error message based on the response code from the API fetch.
  function getErrorMessage(responseCode) {
    let errorMessage = "";
    let categoryNum = category - 9;

    switch (responseCode) {
      case 1:
        errorMessage =
          "No results found. There aren't enough questions in " +
          difficulty +
          " " +
          categories[categoryNum].name +
          ". Enter a smaller number.";
        break;
      case 2:
        errorMessage = "Invalid parameter(s).";
        break;
      case 3:
        errorMessage = "Session Token Not Found.";
        break;
      case 4:
        errorMessage =
          "Congrats! You've completed all of the questions for " +
          difficulty +
          " " +
          categories[categoryNum].name +
          ". Pick another category.";
        break;
      default:
        errorMessage = "";
        break;
    }

    return errorMessage;
  }

  //Code 1: No Results Could not return results. The API doesn't have enough questions for your query. (Ex. Asking for 50 Questions in a Category that only has 20.)
  //Code 2: Invalid Parameter Contains an invalid parameter. Arguements passed in aren't valid. (Ex. Amount = Five)
  //Code 3: Token Not Found Session Token does not exist.
  //Code 4: Token Empty Session Token has returned all possible questions for the specified query. Resetting the Token is necessary.

  useEffect(() => {
    const url = "https://opentdb.com/api.php?";

    if (query !== "") {
      const URL = url + query;
      const encodeURL = encodeURI(URL);

      fetch(encodeURL)
        .then((response) => response.json())
        .then((result) => {
          if (result.response_code === 0) {
            setQuestions(result);
          } else {
            setErrorMessage(getErrorMessage(result.response_code));
          }
        });
    }
  }, [query, setQuestions]);

  //console.log(categories);
  //console.log(query);

  return (
    <div className="box container has-text-centered">
      <form onSubmit={handleSubmit}>
        <p className="subtitle">Hello, {player}</p>
        <h2 className="title">Set up your game</h2>

        <div className="field">
          <label htmlFor="playerName">Type your Name</label>
          <input
            className="input"
            type="text"
            name="playerName"
            value={player}
            onChange={handleChange}
            onFocus={handleFocus}
          ></input>
        </div>

        <div className="field is-grouped">
          <label
            className="control is-align-self-center"
            htmlFor="numOfQuestions"
          >
            # of Questions?
          </label>
          <input
            className="input ml-2"
            type="number"
            name="numOfQuestions"
            id="numOfQuestions"
            min="1"
            max="50"
            placeholder="Number of Questions"
            required
            onChange={handleChange}
          ></input>

          <div className="control select">
            <select
              className="ml-2"
              name="category"
              id="category"
              onChange={(e) => {
                if (e.target.selectedIndex === 0) {
                  setCategory(null);
                } else {
                  setCategory(e.target.value);
                }
              }}
              required
            >
              <option>Any Category</option>
              {categories &&
                categories.map((category, key) => (
                  <option key={key} value={category.id}>
                    {category.name}
                  </option>
                ))}
            </select>
          </div>
        </div>

        <div className="field is-grouped">
          <p className="mr-3">
            <strong>Difficulty</strong>
          </p>
          <label className="control" htmlFor="anyDifficulty">
            <input
              className="mr-1"
              type="radio"
              name="difficulty"
              id="anyDifficulty"
              value=""
              onChange={handleChange}
              required
            ></input>
            Any Difficulty
          </label>
          <label className="control" htmlFor="easy">
            <input
              className="mr-1"
              type="radio"
              name="difficulty"
              id="easy"
              value="easy"
              onChange={handleChange}
              required
            ></input>
            Easy
          </label>
          <label className="control" htmlFor="medium">
            <input
              className="mr-1"
              type="radio"
              name="difficulty"
              id="medium"
              value="medium"
              onChange={handleChange}
              required
            ></input>
            Medium
          </label>
          <label className="control" htmlFor="hard">
            <input
              className="mr-1"
              type="radio"
              name="difficulty"
              id="hard"
              value="hard"
              onChange={handleChange}
              required
            ></input>
            Hard
          </label>
        </div>

        <div className="field is-grouped">
          <p className="mr-3">
            <strong>Format</strong>
          </p>
          <label className="control" htmlFor="anyType">
            <input
              className="mr-1"
              type="radio"
              name="format"
              id="anyType"
              value="any"
              onChange={handleChange}
              required
            ></input>
            Any Type
          </label>
          <label className="control" htmlFor="multipleChoice">
            <input
              className="mr-1"
              type="radio"
              name="format"
              id="multipleChoice"
              value="multiple"
              onChange={handleChange}
              required
            ></input>
            Multiple Choice
          </label>
          <label className="control" htmlFor="trueFalse">
            <input
              className="mr-1"
              type="radio"
              name="format"
              id="trueFalse"
              value="boolean"
              onChange={handleChange}
              required
            ></input>
            True/False
          </label>
        </div>

        <div className="control">
          <input className="button" type="submit"></input>
        </div>
      </form>
    </div>
  );
}
