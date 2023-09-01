import { generateUUID } from "../utils/generateUUID.js";
import { displayError } from "../utils/error.js";

export function InputComponent(tag) {
  // Replace tag with a Div
  const div = document.createElement("input");
  div.innerHTML = tag.innerHTML;
  tag.parentNode.replaceChild(div, tag);

  // Attributes
  const isFullWidth = tag.hasAttribute("full-width");
  const type = tag.getAttribute("type");
  console.log(isFullWidth);

  if (type === null) {
    let res = "Input component must have a type attribute";
    displayError(res);
    throw new Error(res);
  }

  // Allowed types
  const AllowedTypes = [
    "text",
    "password",
    "email",
    "number",
    "date",
    "time",
    "datetime-local",
    "search",
    "tel",
    "url",
    "week",
    "month",
    "file",
    "color",
  ];

  if (!AllowedTypes.includes(type)) {
    let res = `Invalid type ${type} found. Valid types are ${AllowedTypes.join(
      ", "
    )}`;
    displayError(res);
    throw new Error(res);
  }

  // Add Basic styles
  const styles = document.createElement("style");
  styles.setAttribute("data-id", generateUUID());
  styles.setAttribute("data-component-type", "input");
  styles.innerHTML = `
        /*  
          "themostbad-css-framework" - Copyright © 2023, Lasse Vestergaard
          MIT License - Free to use, modify, and distribute
          Compiled at: "$"{new Date().toISOString()}
          Compile ID: "$"{generateUUID()}
        */

          .input {
            border: 2px solid var(--dark-light);
            border-radius: 5px;
            padding: 10px;
            ${isFullWidth === true ? "width: 100%;" : ""}
            outline: none;
            transition: 0.2s;
          }    

          .input:focus {
            border: 2px solid var(--primary-light);
            box-shadow: 0 0 0 2.5px var(--primary-light);
          }
      `;

  // Append the styles to the head
  document.head.appendChild(styles);

  // Add the class to the button
  div.classList.add(`input`);

  // Copy standard HTML attributes from <themostbad> to the generated <button>
  const attributes = tag.attributes;
  for (let i = 0; i < attributes.length; i++) {
    const { name, value } = attributes[i];
    if (name !== "component") {
      div.setAttribute(name, value);
    }
  }
}
