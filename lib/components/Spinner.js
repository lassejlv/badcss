import { generateUUID } from "../utils/generateUUID.js";
import { displayError } from "../utils/error.js";

export function SpinnerComponent(tag) {
  // Replace tag with a Div
  const div = document.createElement("div");
  div.innerHTML = tag.innerHTML;
  tag.parentNode.replaceChild(div, tag);

  // Add a class to the tag
  const spinnerType = tag.getAttribute("variant");
  const speed = tag.getAttribute("speed");

  if (!speed) {
    return;
  }

  if (!spinnerType) {
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

  if (!allowedVariants.includes(spinnerType)) {
    displayError(`Invalid variant Spinner`);
    throw new Error(`Invalid variant Spinner`);
  }

  // Colors for the Spinner
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
  styles.setAttribute("data-component-type", "spinner");
  styles.innerHTML = `
        /*  
          "themostbad-css-framework" - Copyright © 2023, Lasse Vestergaard
          MIT License - Free to use, modify, and distribute
          Compiled at: ${new Date().toISOString()}
          Compile ID: ${generateUUID()}
        */

          .spinner-${spinnerType} {
            border: 0.2rem solid ${colors[spinnerType]};
            border-top: 0.2rem solid transparent;
            border-radius: 50%;
            width: 1.5rem;
            height: 1.5rem;
            animation: spin ${speed ? speed : "1s"} linear infinite;
            margin: 0 auto;
          }
          
          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
          
            100% {
              transform: rotate(360deg);
            }
          }
      `;

  // Append the styles to the head
  document.head.appendChild(styles);

  // Add the class to the button
  div.classList.add(`spinner-${spinnerType}`);

  // Copy standard HTML attributes from <themostbad> to the generated <button>
  const attributes = tag.attributes;
  for (let i = 0; i < attributes.length; i++) {
    const { name, value } = attributes[i];
    if (name !== "component" && name !== "variant") {
      div.setAttribute(name, value);
    }
  }
}
