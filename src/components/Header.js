import { BsFillPatchQuestionFill } from "react-icons/bs";

export default function Header() {
  return (
    <header className="content">
      <h1 className="title has-text-centered is-1">
        <BsFillPatchQuestionFill />
        &nbsp; Hello, Trivia
      </h1>
    </header>
  );
}
