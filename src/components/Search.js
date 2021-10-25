import React, { useEffect, useState } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";

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
  errorMessage,
  setErrorMessage,
  questions,
  setQuestions,
  getErrorMessage
}) {
  const categoryList = Object.keys(categories);
  const [categoryInput, setCategoryInput] = useState();
  const [number, setNumber] = useState("");
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [format, setFormat] = useState("");

  // Opens the modal window, displays the category list
  // and disables scrolling on the page.
  function openModal(e) {
    e.preventDefault();

    const modal = document.querySelector(".modal");
    const html = document.querySelector("html");
    modal.classList.add("is-active");
    html.classList.add("is-clipped");
  }

  // Closes the categoryList modal window and sets the
  // classNames back to their initial states.
  function closeModal(e) {
    e.preventDefault();

    const modal = document.querySelector(".modal");
    const html = document.querySelector("html");
    modal.classList.remove("is-active");
    html.classList.remove("is-clipped");
  }

  // Handles the onFocus event of the player name input.
  function handleFocus(e) {
    e.target.select();
  }

  function validateCategory() {
    // Bit of a hacky solution to include search fuctionality.
    // A select would work better frankly, but I don't want to lose marks.

    // Get all of the keys from the categories.
    const categoryKeys = Object.keys(categories);
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

  // Handles the onChange event of the form inputs.
  function handleChange(e) {
    setErrorMessage("");

    switch (e.target.name) {
      case "category":
        // Bit of a hacky solution to include search fuctionality.
        // A select would work better frankly, but I don't want to lose marks.

        // Get all of the keys from the categories.
        const categoryKeys = Object.keys(categories);
        const value = e.target.value;
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

        break;
      case "numOfQuestions":
        setNumber(e.target.value);
        break;
      default:
        break;
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

  // // Gets the error message based on the response code from the API fetch.
  // function getErrorMessage(responseCode) {
  //   let errorMessage = "";

  //   switch (responseCode) {
  //     case 1:
  //       errorMessage =
  //         "No results found. There aren't enough questions in that category.";
  //       break;
  //     case 2:
  //       errorMessage =
  //         "Not a valid category. Check out the list of category topics.";
  //       break;
  //     case 3:
  //       errorMessage = "Session Token Not Found.";
  //       break;
  //     case 4:
  //       errorMessage =
  //         "Congrats! You've completed all of the questions for yor category. Pick another one!";
  //       break;
  //     default:
  //       errorMessage = "";
  //       break;
  //   }

  //   return errorMessage;
  // }

  //Code 1: No Results Could not return results. The API doesn't have enough questions for your query. (Ex. Asking for 50 Questions in a Category that only has 20.)
  //Code 2: Invalid Parameter Contains an invalid parameter. Arguements passed in aren't valid. (Ex. Amount = Five)
  //Code 3: Token Not Found Session Token does not exist.
  //Code 4: Token Empty Session Token has returned all possible questions for the specified query. Resetting the Token is necessary.

  // useEffect(() => {
  //   const url = "https://opentdb.com/api.php?";

  //   if (query !== "") {
  //     const URL = url + query;
  //     const encodeURL = encodeURI(URL);

  //     fetch(encodeURL)
  //       .then((response) => response.json())
  //       .then((result) => {
  //         if (result.response_code === 0) {
  //           setQuestions(result);
  //         } else {
  //           setErrorMessage(getErrorMessage(result.response_code));
  //         }
  //       });
  //   }
  // }, [query]);

  useEffect(() => {
    document.querySelector("#submit").disabled = errorMessage !== "";
  }, [errorMessage]);

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
                <button className="buttonLooksLikeLink" onClick={openModal}>
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
                  onChange={(e) => setDifficulty(e.target.value)}
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
                  onChange={(e) => setDifficulty(e.target.value)}
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
                  onChange={(e) => setDifficulty(e.target.value)}
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
                  onChange={(e) => setDifficulty(e.target.value)}
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
                  onChange={(e) => setFormat(e.target.value)}
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
                  onChange={(e) => setFormat(e.target.value)}
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
                  onChange={(e) => setFormat(e.target.value)}
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

      <div className="modal">
        <div className="modal-background" onClick={closeModal}></div>
        <div className="modal-content box">
          <h3 className="title">Categories</h3>
          <ul>
            {categoryList.map((cat, key) => (
              <li key={key}>
                <button
                  className="buttonLooksLikeLink"
                  onClick={(e) => {
                    const input = document.querySelector("#category");
                    input.value = e.target.innerHTML;
                    validateCategory();
                    closeModal(e);
                  }}
                >
                  {categories[cat].name}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <button
          className="button modal-close"
          aria-label="close"
          onClick={closeModal}
        ></button>
      </div>
    </div>
  );
}
