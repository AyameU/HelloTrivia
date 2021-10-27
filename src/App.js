import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import QuestionSection from "./components/QuestionSection";
import Footer from "./components/Footer";

export default function App() {
  // Setting categories, query, errorMessages and questions state in App to "lift up state" from the Search component.
  // The state variable and setter are then passed down and updated in
  // the child component, instead of doing everything in the component.
  const [sessionToken, setSessionToken] = useState();
  const [player, setPlayer] = useState("");
  const [categories, setCategories] = useState("");
  const [query, setQuery] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [questions, setQuestions] = useState(null);

  // Handles the session token.
  // Retrieves a session token ensures a player is never given
  // the same question, until they exhaust all questions.
  // Tokens are deleted after 6 hours of inactivity.
  function getNewSessionToken() {
    fetch("https://opentdb.com/api_token.php?command=request")
      .then((response) => response.json())
      .then((result) => {
        if (result.response_code === 0) {
          setSessionToken(result.token);
        }
      });
  }

  // Resets the Session Token and wipes all past memory.
  // If a player has answered all questions (overall or in a category),
  // this resets that data.
  function resetSessionToken() {
    fetch(
      "https://opentdb.com/api_token.php?command=reset&token=" + sessionToken
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.response_code === 0) {
          setSessionToken(result.token);
        }
      });
  }

  // Gets the error message based on the response code from the API fetch.
  function getErrorMessage(responseCode) {
    let errorMessage = "";

    switch (responseCode) {
      case 1:
        errorMessage =
          "No results found. There aren't enough questions in that category.";
        break;
      case 2:
        errorMessage =
          "Not a valid category. Check out the list of category topics.";
        break;
      case 3:
        errorMessage = "Session Token Not Found.";
        break;
      case 4:
        errorMessage =
          "Congrats! You've completed all of the questions for your category. Pick another category or reset your session token.";
        break;
      default:
        errorMessage = "";
        break;
    }
    return errorMessage;
  }

  // Fetches the list of trivia categories to populate the select element.
  useEffect(() => {
    fetch("https://opentdb.com/api_category.php")
      .then((response) => response.json())
      .then((result) => setCategories(result.trivia_categories));
  }, []);

  // Fetches a session token on load.
  useEffect(() => getNewSessionToken(), []);

  // Fetches the questions from the database based on the form inputs.
  useEffect(() => {
    const url = "https://opentdb.com/api.php?";

    if (query !== "") {
      const URL = url + query + "&" + sessionToken;
      const encodeURL = encodeURI(URL);

      if (sessionToken === "") {
        getNewSessionToken();
      }

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
  }, [query]);

  useEffect(() => {
    document.querySelector("#submit").disabled = errorMessage !== "";
  }, [errorMessage]);

  //console.log(sessionToken);
  //console.log(categories);
  //console.log(query);
  //console.log(errorMessage);
  //console.log(questions);

  return (
    <>
      <Header />
      <main>
        {!questions && (
          <Search
            player={player}
            setPlayer={setPlayer}
            categories={categories}
            setQuery={setQuery}
            setErrorMessage={setErrorMessage}
            getErrorMessage={getErrorMessage}
          />
        )}
        {questions && (
          <QuestionSection
            questions={questions.results}
            setQuestions={setQuestions}
            setQuery={setQuery}
          />
        )}
        <p>{errorMessage}</p>
      </main>
      <Footer resetSessionToken={resetSessionToken} />
    </>
  );
}
