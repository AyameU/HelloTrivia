import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import QuestionSection from "./components/QuestionSection";
import Footer from "./components/Footer";

export default function App() {
  // Setting categories, query, errorMessages and questions state in App to "lift up state" from the Search component.
  // The state variable and setter are then passed down and updated in
  // the child component, instead of doing everything in the component.
  const [player, setPlayer] = useState("Player");
  const [categories, setCategories] = useState(null);
  const [query, setQuery] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [questions, setQuestions] = useState(null);

  // Show the question section after a successful API fetch
  // or display an error message.
  function showQuestions() {
    if (questions !== null)
      return <QuestionSection questions={questions.results} />;
    else return <p>{errorMessage}</p>;
  }

  // Grabs the list of trivia categories to populate the select element.
  useEffect(() => {
    fetch("https://opentdb.com/api_category.php")
      .then((response) => response.json())
      .then((result) => setCategories(result.trivia_categories));
  }, []);

  //console.log(categories);
  //console.log(query);
  console.log(errorMessage);
  console.log(questions);

  return (
    <>
      <Header />
      <Search
        player={player}
        setPlayer={setPlayer}
        categories={categories}
        query={query}
        setQuery={setQuery}
        setErrorMessage={setErrorMessage}
        questions={questions}
        setQuestions={setQuestions}
      />
      {showQuestions()}
      <Footer />
    </>
  );
}
