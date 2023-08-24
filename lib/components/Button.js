import { generateUUID } from "../utils/generateUUID.js";
import { displayError } from "../utils/error.js";

export function ButtonComponent(tag) {
  // Replace tag with a button
  const button = document.createElement("button");
  button.innerHTML = tag.innerHTML;
  tag.parentNode.replaceChild(button, tag);

  // Add a class to the tag
  const buttonType = tag.getAttribute("variant");
  const buttonSize = tag.getAttribute("size");
  const withRing = tag.getAttribute("withRing");
  const overwriteColor = tag.getAttribute("color");

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
  if (!allowedVariants.includes(buttonType)) {
    displayError(`Invalid variant ${buttonType}`);
    throw new Error(`Invalid variant ${buttonType}`);
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

  const sizeStyles = {
    sm: {
      padding: "0.25rem 0.5rem",
      fontSize: "0.75rem",
    },
    md: {
      padding: "0.5rem 1rem",
      fontSize: "0.875rem",
    },
    lg: {
      padding: "0.75rem 1rem",
      fontSize: "1rem",
    },
    xl: {
      padding: "1rem 1.5rem",
      fontSize: "1.125rem",
    },
  };

  // Add Basic styles
  const styles = document.createElement("style");
  styles.setAttribute("data-id", generateUUID());
  styles.setAttribute("data-component-type", "button");
  styles.innerHTML = `
        /*  
          "themostbad-css-framework" - Copyright © 2023, Lasse Vestergaard
          MIT License - Free to use, modify, and distribute
          Compiled at: ${new Date().toISOString()}
          Compile ID: ${generateUUID()}
        */

          .button-${buttonType}${withRing === "true" ? "-ring" : ""} {
              color:  ${
                buttonType === "light" ? "var(--dark)" : "var(--light)"
              };
              background-color: ${
                overwriteColor ? `var(--${overwriteColor})` : colors[buttonType]
              };
              font-size: ${
                buttonSize === "sm"
                  ? "0.875rem"
                  : buttonSize === "md"
                  ? "1rem"
                  : buttonSize === "lg"
                  ? "1.25rem"
                  : buttonSize === "xl"
                  ? "1.5rem"
                  : "1rem"
              };

              /* types are sm,md,lg,xl */
              padding: ${sizeStyles[buttonSize].padding || "0.5rem 1rem"};
              cursor: pointer;
              border-radius: 5px;
              border: none;
              transition: all 0.3s ease-in-out;
              font-size: ${sizeStyles[buttonSize].fontSize};
          }

          /* Hover */
          .button-${buttonType}${withRing === "true" ? "-ring" : ""}:hover {
              opacity: 0.9;
          }

          /* Focus */
          .button-${buttonType}${withRing === "true" ? "-ring" : ""}:focus {
              outline: none;
              ${
                withRing === "true" &&
                ` box-shadow: 0 0 0 3px ${
                  overwriteColor
                    ? `var(--${overwriteColor}Light)`
                    : colors[buttonType + "Light"]
                };`
              }
             
          }

          
      `;

  // Append the styles to the head
  document.head.appendChild(styles);

  // Add the class to the button
  button.classList.add(
    `button-${buttonType}${withRing === "true" ? "-ring" : ""}`
  );

  // Copy standard HTML attributes from <themostbad> to the generated <button>
  const attributes = tag.attributes;
  for (let i = 0; i < attributes.length; i++) {
    const { name, value } = attributes[i];
    if (
      name !== "component" &&
      name !== "variant" &&
      name !== "size" &&
      name !== "withring"
    ) {
      button.setAttribute(name, value);
    }
  }
}

// Call the ButtonComponent function with the custom HTML tags
const customButtons = document.querySelectorAll(
  'themostbad[component="button"]'
);
if (customButtons) {
  customButtons.forEach((customButton) => {
    ButtonComponent(customButton);
  });
}
