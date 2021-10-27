import { AiOutlineInfoCircle } from "react-icons/ai";
import { OpenModal } from "../utils/ModalFunctions";
import ResetSessionModal from "./ResetSessionModal";

export default function Footer({resetSessionToken}) {
  return (
    <>
    <footer className="footer has-background-black has-text-white has-text-centered pb-6">
          <button
            className="buttonLooksLikeLink is-flex is-align-items-center"
            onClick={(e) => OpenModal(e, "resetSession")}
          >
            <AiOutlineInfoCircle size="1rem" color="white"/>
            &nbsp;
             Reset Token
          </button>
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
