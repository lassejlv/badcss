import { generateUUID } from "../utils/generateUUID";

export function SpinnerComponent(tag) {
  // Replace tag with a Div
  const div = document.createElement("div");
  div.innerHTML = tag.innerHTML;
  tag.parentNode.replaceChild(div, tag);

  // Add a class to the tag
  const spinnerType = tag.getAttribute("variant");

  if (!spinnerType) {
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
    throw new Error(`Invalid variant ${spinnerType}`);
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

          .spinner-${spinnerType} {
            
          }

         
      `;

  // Append the styles to the head
  document.head.appendChild(styles);

  // Add the class to the button
  div.classList.add(`alert-${spinnerType}`);

  // Copy standard HTML attributes from <themostbad> to the generated <button>
  const attributes = tag.attributes;
  for (let i = 0; i < attributes.length; i++) {
    const { name, value } = attributes[i];
    if (name !== "component" && name !== "variant") {
      div.setAttribute(name, value);
    }
  }
}
