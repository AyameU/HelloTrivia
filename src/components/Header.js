import { BsFillPatchQuestionFill } from "react-icons/bs";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { OpenModal, CloseModal } from "./Modal";

export default function Header({ resetSessionToken }) {
  return (
    <>
      <header className="content has-text-centered mt-5">
        <h1 className="title is-1 is-flex is-align-items-center is-justify-content-center">
          <BsFillPatchQuestionFill />
          &nbsp; Hello, Trivia
        </h1>
        <p className="subtitle">Do You Want to Play a Game?</p>
        <nav>
          <button
            className="buttonLooksLikeLink"
            onClick={(e) => OpenModal(e, "resetSession")}
          >
            <AiOutlineInfoCircle size="1.5rem" color="#363636" />
          </button>
        </nav>
      </header>

      <div id="resetSession" className="modal">
        <div
          className="modal-background"
          onClick={(e) => CloseModal(e, "resetSession")}
        ></div>
        <div className="modal-content box content">
          <h3 className="title">Resetting Your Game Session Token</h3>
          <p>
            The session token of your game keeps track of what questions you
            have already answered. If you exhaust all of the questions in a
            category, you can reset your session token (use the button below) OR
            pick another category.
          </p>
          <p>Your token will expire after 6 hours of inactivity.</p>
          <button
            className="button has-background-danger has-text-white"
            onClick={() => {
              if (
                window.confirm(
                  "Are you sure you want to reset your session token?"
                )
              ) {
                resetSessionToken();
              }
            }}
          >
            Reset Session Token
          </button>
        </div>
        <button
          className="button modal-close is-flex is-justify-content-center"
          aria-label="close"
          onClick={(e) => CloseModal(e, "resetSession")}
        ></button>
      </div>
    </>
  );
}
