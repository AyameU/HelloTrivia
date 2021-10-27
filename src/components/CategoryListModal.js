import { CloseModal } from "./Modal";

export default function CategoryListModal({categoryNames}) {
    return (
        <div id="categoryList" className="modal">
        <div
          className="modal-background"
          onClick={(e) => CloseModal(e, "categoryList")}
        ></div>
        <div className="modal-content box">
          <h3 className="title">Categories</h3>
          <ul>
            {categoryNames.map((cat, key) => (
              <li key={key}>
                <button
                  className="buttonLooksLikeLink"
                  onClick={(e) => {
                    const input = document.querySelector("#category");
                    input.value = cat;
                    validateCategory();
                    CloseModal(e, "categoryList");
                  }}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <button
          className="button modal-close"
          aria-label="close"
          onClick={(e) => CloseModal(e, "categoryList")}
        ></button>
      </div>
    );
}