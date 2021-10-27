import { CloseModal } from "../utils/ModalFunctions";

export default function ResetSessionModal({ resetSessionToken }) {
    return (
    <div id="resetSession" className="modal">
        <div
          className="modal-background"
          onClick={(e) => CloseModal(e, "resetSession")}
        ></div>
        <div className="modal-content box content">
          <h3 className="title">Resetting Your Game Session Token</h3>
          <p>
            The session token of your game keeps track of what questions you have already answered. If you exhaust all of the questions in a category, you can reset your session token (use the button below) OR pick another category.
          </p>
          <p>
              If you've exhausted all of the questions in every category (IMPRESSIVE), you'll need to reset your token with the button below.
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
    );
}