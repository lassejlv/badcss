import { generateUUID } from "../utils/generateUUID.js";
import { displayError } from "../utils/error.js";

export function CheckboxComponent(tag) {
  // Add a class to the tag
  const Checkbox = tag.getAttribute("variant");
  const isChecked = tag.getAttribute("isChecked");

  // Replace tag with a Div
  const div = document.createElement("div");
  div.innerHTML = `
    <div class="checkbox-${Checkbox}">
      <input type="checkbox" class="checkbox-${Checkbox}-input" ${
    isChecked ? "checked" : ""
  }>
    </div>
  `;
  tag.parentNode.replaceChild(div, tag);

  if (!Checkbox) {
    displayError("No variant found");
    throw new Error("No variant found");
  }

  // Allowed variants
  const allowedVariants = [
    "primary",
    "secondary",
    "danger",
    "success",
    "warning",
    "info",
    "dark",
    "light",
  ];

  if (!allowedVariants.includes(Checkbox)) {
    displayError(`Invalid variant ${Checkbox}`);
    throw new Error(`Invalid variant ${Checkbox}`);
  }

  // Colors for the Checkbox
  const colors = {
    primary: "var(--primary)",
    secondary: "var(--secondary)",
    danger: "var(--danger)",
    success: "var(--success)",
    warning: "var(--warning)",
    info: "var(--info)",
    dark: "var(--dark)",
    light: "var(--light)",
  };

  // Add Basic styles
  const styles = document.createElement("style");
  styles.setAttribute("data-id", generateUUID());
  styles.setAttribute("data-component-type", "Checkbox");
  styles.innerHTML = `
        /*  
          "themostbad-css-framework" - Copyright © 2023, Lasse Vestergaard
          MIT License - Free to use, modify, and distribute
          Compiled at: "$"{new Date().toISOString()}
          Compile ID: "$"{generateUUID()}
        */

          .checkbox-${Checkbox} {
          display: inline-block;
          position: relative;
          width: 1.5rem;
          height: 1.5rem;
          border-radius: 0.25rem;
          border: 1px solid ${colors[Checkbox]};
          background-color: ${colors[Checkbox]};
          cursor: pointer;
          transition: all 0.2s ease-in-out;
        }

        
      `;

  // Append the styles to the head
  document.head.appendChild(styles);

  // Add the class to the button
  div.classList.add(`checkbox-${Checkbox}`);

  // Copy standard HTML attributes from <themostbad> to the generated <button>
  const attributes = tag.attributes;
  for (let i = 0; i < attributes.length; i++) {
    const { name, value } = attributes[i];
    if (name !== "component" && name !== "variant") {
      div.setAttribute(name, value);
    }
  }
}
