import { BsFillPatchQuestionFill } from "react-icons/bs";

export default function Header() {
  return (
    <>
      <header className="has-text-centered">
        <div className="is-flex is-align-items-center is-justify-content-center">
        <BsFillPatchQuestionFill className="mr-2" size="3rem" color="#363636" />
          <h1 className="title is-1">Hello, Trivia</h1>
        </div>
        <p className="subtitle">Do You Want to Play a Game?</p>
      </header>
    </>
  );
}
