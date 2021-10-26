// As the name semi describes...
// Copies an array, adds a new value added at a random index,
// and returns the new array.
export function AddValueToArrayAtRandomIndex(array, value) {
  // Copy the old array into a new array.
  let newArray = array.slice();
  let min = 0;
  let max = array.length + 1;

  // Get a random number ranging from 0 to (the newArray length + 1).
  // Use as index for new value.
  let randomIndex = Math.floor(Math.random() * (max - min + 1) + min);

  // Add the new value to the randomly chosen index.
  newArray.splice(randomIndex, 0, value);

  return newArray;
}

// Renders a string containing HTML tags with the correct markup in a span tag.
export function RenderHTML(text) {
  return <span dangerouslySetInnerHTML={{ __html: text }}></span>;
}

export function CreateMarkup(text) {
  return { __html: text };
}
