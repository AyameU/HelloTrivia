import { BsFillPatchQuestionFill } from "react-icons/bs";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { OpenModal, CloseModal } from "./Modal";

export default function Header({ resetSessionToken }) {
  return (
    <>
      <header className="content has-text-centered">
        <div>
          <h1 className="title is-1 is-flex is-align-items-center is-justify-content-center">
            <BsFillPatchQuestionFill />
            &nbsp; Hello, Trivia
          </h1>
          <p className="subtitle">Do You Want to Play a Game?</p>
        </div>
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
          <div className="is-flex is-justify-content-center">
            <button
              className="button has-background-danger has-text-white"
              onClick={(e) => {
                if (
                  window.confirm(
                    "Are you sure you want to reset your session token?"
                  )
                ) {
                  resetSessionToken();
                  CloseModal(e, "resetSession");
                }
              }}
            >
              Reset Session Token
            </button>
          </div>
        </div>
        <button
          className="button modal-close"
          aria-label="close"
          onClick={(e) => CloseModal(e, "resetSession")}
        ></button>
      </div>
    </>
  );
}
