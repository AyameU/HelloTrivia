import { AiOutlineInfoCircle } from "react-icons/ai";
import { OpenModal } from "./Modal";
import ResetSessionModal from "./ResetSessionModal";

export default function Footer({resetSessionToken}) {
  return (
    <>
    <footer className="footer has-background-black has-text-white has-text-centered pb-6">
      <nav>
          <button
            className="buttonLooksLikeLink"
            onClick={(e) => OpenModal(e, "resetSession")}
          >
            <AiOutlineInfoCircle size="1rem" color="white"/>
             Reset Token
          </button>
        </nav>
      <p>
        Coded by Ayame Ulrich | API{" "}
        <a href="https://opentdb.com" target="_blank" rel="noreferrer">
          Open Trivia Database
        </a>
      </p>
    </footer>
    <ResetSessionModal resetSessionToken={resetSessionToken} />
    </>
  );
}
