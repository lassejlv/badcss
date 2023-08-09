const prompt = require("prompt-sync")();
const fs = require("fs");

const componentName = prompt("Component name: ");

if (!componentName) {
  throw new Error("No component name provided");
}

// first character to upper case
const componentFileName =
  componentName.charAt(0).toUpperCase() + componentName.slice(1);

// component template
const componentTemplate = `

import { generateUUID } from "../utils/generateUUID.js";

export function ${componentFileName}Component(tag) {
  // Replace tag with a Div
  const div = document.createElement("div");
  div.innerHTML = tag.innerHTML;
  tag.parentNode.replaceChild(div, tag);

  // Add a class to the tag
  const ${componentFileName} = tag.getAttribute("variant");
  const isShadow = tag.getAttribute("isShadow");
  const isCloseable = tag.getAttribute("isCloseable");

  if (!${componentFileName}) {
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

  if (!allowedVariants.includes(${componentFileName})) {
    throw new Error(\`Invalid variant ${componentFileName}\`);
  }

  // Colors for the ${componentFileName}
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
  styles.setAttribute("data-component-type", "${componentFileName}");
  styles.innerHTML = \`
        /*  
          "themostbad-css-framework" - Copyright © 2023, Lasse Vestergaard
          MIT License - Free to use, modify, and distribute
          Compiled at: "$"{new Date().toISOString()}
          Compile ID: "$"{generateUUID()}
        */

          .alert-${componentFileName} {
            /* add styles */
          }    
      \`;

  // Append the styles to the head
  document.head.appendChild(styles);

  // Add the class to the button
  div.classList.add(\`alert-${componentFileName}\`);

  // Copy standard HTML attributes from <themostbad> to the generated <button>
  const attributes = tag.attributes;
  for (let i = 0; i < attributes.length; i++) {
    const { name, value } = attributes[i];
    if (name !== "component" && name !== "variant") {
      div.setAttribute(name, value);
    }
  }
}


`;

// create component to lib/components
fs.writeFileSync(`./lib/components/${componentFileName}.js`, componentTemplate);

// log success
console.log(`Component ${componentName} created successfully!`);
