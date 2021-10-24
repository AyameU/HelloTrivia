import { BsFillPatchQuestionFill } from "react-icons/bs";

export default function Header() {
  return (
    <header className="content has-text-centered">
      <h1 className="title is-1">
        <BsFillPatchQuestionFill />
        &nbsp; Hello, Trivia
      </h1>
      <p className="subtitle">Do You Want to Play a Game?</p>
    </header>
  );
}
