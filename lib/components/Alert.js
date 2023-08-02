export function AlertComponent(tag) {
  // Replace tag with a button
  const div = document.createElement("div");
  div.innerHTML = tag.innerHTML;
  tag.parentNode.replaceChild(div, tag);

  // Add a class to the tag
  const alertType = tag.getAttribute("variant");

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
    throw new Error(`Invalid variant ${alertType}`);
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
