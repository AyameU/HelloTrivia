import { BsFillPatchQuestionFill } from "react-icons/bs";

export default function Header() {
  return (
    <header className="content has-text-centered mt-5">
      <h1 className="title is-1 is-flex is-align-items-center is-justify-content-center">
        <BsFillPatchQuestionFill />
        &nbsp; Hello, Trivia
      </h1>
      <p className="subtitle">Do You Want to Play a Game?</p>
    </header>
  );
}
