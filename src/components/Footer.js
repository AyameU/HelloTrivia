import { AiOutlineInfoCircle } from "react-icons/ai";
import { OpenModal } from "../utils/ModalFunctions";
import ResetSessionModal from "./ResetSessionModal";

export default function Footer({resetSessionToken}) {
  return (
    <>
    <footer className="footer has-background-black has-text-white has-text-centered pb-6">
      <p>
        Coded by Ayame Ulrich | API{" "}
        <a href="https://opentdb.com" target="_blank" rel="noreferrer">
          Open Trivia Database
        </a>
      </p>
      <div className="is-flex is-justify-content-center mt-2">
          <button
            className="buttonLooksLikeLink is-flex is-align-items-center"
            onClick={(e) => OpenModal(e, "resetSession")}
          >
            <AiOutlineInfoCircle className="mr-1" size="1rem" />
            <p>Reset Session Token</p>
          </button>
        </div>
    </footer>
    <ResetSessionModal resetSessionToken={resetSessionToken} />
    </>
  );
}
