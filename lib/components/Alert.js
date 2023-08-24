import { generateUUID } from "../utils/generateUUID.js";
import { displayError } from "../utils/error.js";

export function AlertComponent(tag) {
  // Replace tag with a Div
  const div = document.createElement("div");
  div.innerHTML = tag.innerHTML;
  tag.parentNode.replaceChild(div, tag);

  // Add a class to the tag
  const alertType = tag.getAttribute("variant");
  const isShadow = tag.getAttribute("isShadow");
  const isCloseable = tag.getAttribute("isCloseable");

  if (!alertType) {
    displayError("No variant found");
    throw new Error("No variant found");
  }

  // if the alert is closeable
  if (isCloseable === "true") {
    const closeBtn = document.createElement("button");
    closeBtn.innerHTML = `<i class="fas fa-times"></i>`;
    closeBtn.classList.add("close-btn");
    closeBtn.addEventListener("click", () => {
      div.remove();
    });
    div.appendChild(closeBtn);
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
  if (!allowedVariants.includes(alertType)) {
    displayError(`Invalid variant ${alertType}`);
    throw new Error(`Invalid variant ${alertType}`);
  }

  // Colors for the button
  const colors = {
    primary: "var(--primary)",
    primaryLight: "var(--primary-light)",
    secondary: "var(--secondary)",
    secondaryLight: "var(--secondary-light)",
    danger: "var(--danger)",
    dangerLight: "var(--danger-light)",
    success: "var(--success)",
    successLight: "var(--success-light)",
    warning: "var(--warning)",
    warningLight: "var(--warning-light)",
    info: "var(--info)",
    infoLight: "var(--info-light)",
    dark: "var(--dark)",
    darkLight: "var(--dark-light)",
    light: "var(--light)",
    lightLight: "var(--light-light)",
    // Add more colors for other variants if needed
  };

  // Add Basic styles
  const styles = document.createElement("style");
  styles.setAttribute("data-id", generateUUID());
  styles.setAttribute("data-component-type", "alert");
  styles.innerHTML = `
        /*  
          "themostbad-css-framework" - Copyright © 2023, Lasse Vestergaard
          MIT License - Free to use, modify, and distribute
          Compiled at: ${new Date().toISOString()}
          Compile ID: ${generateUUID()}
        */

          .alert-${alertType} {
             background-color: ${colors[alertType]};
             border-radius: 5px;
             border: 2px solid ${colors[alertType + "Light"]};
             color: rgba(255, 255, 255, 0.7);
             padding: 1rem;
             margin: 1rem;
             ${
               isShadow === "true"
                 ? `box-shadow: 0 0 10px ${colors[alertType + "Light"]}`
                 : ""
             }
          }

          .alert-${alertType} .alert-title {
            font-size: 1.5rem;
            font-weight: bold;
            opacity: 1;
            margin: 0;
          }

          .alert-${alertType} .alert-message {
             font-size: 1rem;
             opacity: 1;
             margin: 0;

           }

           .alert-${alertType} hr {
                border: 1px solid ${colors[alertType + "Light"]};
                margin: 1rem 0;
            }

            .alert-${alertType} .close-btn {
                position: absolute;
                top: 0.7rem;
                right: 0.7rem;
                border: none;
                background: none;
                color: rgba(255, 255, 255, 0.7);
                cursor: pointer;
                outline: none;
                font-size: 1.5rem;
            }

            .alert-${alertType} .close-btn:hover {
                color: rgba(255, 255, 255, 1);
            }
      `;

  // Append the styles to the head
  document.head.appendChild(styles);

  // Add the class to the button
  div.classList.add(`alert-${alertType}`);

  // Copy standard HTML attributes from <themostbad> to the generated <button>
  const attributes = tag.attributes;
  for (let i = 0; i < attributes.length; i++) {
    const { name, value } = attributes[i];
    if (name !== "component" && name !== "variant") {
      div.setAttribute(name, value);
    }
  }
}
