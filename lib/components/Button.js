export function ButtonComponent(tag) {
  // Replace tag with a button
  const button = document.createElement("button");
  button.innerHTML = tag.innerHTML;
  tag.parentNode.replaceChild(button, tag);

  // Add a class to the tag
  const buttonType = tag.getAttribute("variant");
  const buttonSize = tag.getAttribute("size");

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
    throw new Error(`Invalid variant ${buttonType}`);
  }

  // Colors for the button
  const colors = {
    primary: "var(--primary)",
    secondary: "var(--secondary)",
    danger: "var(--danger)",
    success: "var(--success)",
    warning: "var(--warning)",
    info: "var(--info)",
    dark: "var(--dark)",
    light: "var(--light)",
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

  /* Helper function to generate a UUID (Universally Unique Identifier) */
  function generateUUID() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        var r = (Math.random() * 16) | 0,
          v = c === "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  }

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

          .button-${buttonType} {
              color:  ${
                buttonType === "light" ? "var(--dark)" : "var(--light)"
              };
              background-color: ${colors[buttonType]};
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
          .button-${buttonType}:hover {
              opacity: 0.9;
          }

          /* Focus */
          .button-${buttonType}:focus {
              outline: none;
          }
      `;

  // Append the styles to the head
  document.head.appendChild(styles);

  // Add the class to the button
  button.classList.add(`button-${buttonType}`);

  // Copy standard HTML attributes from <themostbad> to the generated <button>
  const attributes = tag.attributes;
  for (let i = 0; i < attributes.length; i++) {
    const { name, value } = attributes[i];
    if (name !== "component" && name !== "variant" && name !== "size") {
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
