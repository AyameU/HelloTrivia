// Handles the Modal functions

// Opens the modal window, displays the category list
// and disables scrolling on the page.
export function OpenModal(e, id) {
  e.preventDefault();

  const modal = document.querySelector("#" + id);
  const html = document.querySelector("html");
  modal.classList.add("is-active");
  html.classList.add("is-clipped");
}

// Closes the categoryList modal window and sets the
// classNames back to their initial states.
export function CloseModal(e, id) {
  e.preventDefault();

  const modal = document.querySelector("#" + id);
  const html = document.querySelector("html");
  modal.classList.remove("is-active");
  html.classList.remove("is-clipped");
}
