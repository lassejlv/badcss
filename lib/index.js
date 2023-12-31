import { ButtonComponent } from "./components/Button.js";
import { AlertComponent } from "./components/Alert.js";
import { generateColor } from "./utils/generateColor.js";
import { SpinnerComponent } from "./components/Spinner.js";
import { Log } from "./utils/Logger.js";
import { displayError } from "./utils/error.js";
import { InputComponent } from "./components/Input.js";

const validComponents = ["button", "alert", "spinner", "input"];

// Get the "badcss" from the body tag. To get config
try {
  const body = document.getElementsByTagName("body")[0];
  const config = body.getAttribute("badcss-config");
  // Check if the config is valid
  if (!config) {
  }
  const configObj = eval("(" + config + ")");

  // Check if the config is valid
  if (!configObj || typeof configObj !== "object") {
    Log({
      type: "warn",
      message: "Invalid config or no config found",
    });
  }

  // Allowed plugins
  const dataPlugins = {
    fontawesome: `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/${
      configObj?.plugins?.fontawesome?.version || "6.4.0"
    }/css/all.min.css" />`,
  };

  // Check if the plugin is valid
  // Load the plugins
  if (configObj?.plugins?.fontawesome) {
    document.head.innerHTML += configObj.plugins.fontawesome.kitId
      ? `<script src="https://kit.fontawesome.com/${configObj?.plugins?.fontawesome?.kitId}.js" crossorigin="anonymous"></script>`
      : dataPlugins.fontawesome;
  }
  // Remove the "themostbad" from the body tag
  body.removeAttribute("badcss-config");

  // Create a style with global colors
  const styles = document.createElement("style");
  const defaultStyles = document.createElement("style");
  defaultStyles.setAttribute("badcss", ":styles:global");
  styles.setAttribute("badcss", ":root");

  defaultStyles.innerHTML = `
    * {
      magin: 0;
      padding: 0;
      font-family: sans-serif;
    }
  `;

  styles.innerHTML = `
  :root {
    --primary: #2563eb;
    --primary-light: #60a5fa;
    --secondary: #475569;
    --secondary-light: #94a3b8;
    --danger: #dc2626;
    --danger-light: #f87171;
    --success: #16a34a;
    --success-light: #4ade80; 
    --warning: #eab308;
    --warning-light: #fde047;
    --info: #06b6d4;
    --info-light: #67e8f9;
    --dark: #19191a;
    --dark-light: #6b7280;
    --light: #f2f2f2;
    --light-light: #f7f7f7;
    
    /* root: theme custom colors */
    ${
      configObj?.theme?.colors
        ?.map(
          (color) =>
            `--${color.name}: ${color.value};` +
            `\n--${color.name}Light: ${generateColor(color.value)};`
        )
        .join("\n    ") || ""
    }
  }
`;

  // Append the styles to the head
  document.head.appendChild(styles);
  document.head.appendChild(defaultStyles);
} catch (error) {
  Log({
    type: "error",
    message: error.message,
  });
}

// Wait for the DOMContentLoaded event before running the mapping loop
document.addEventListener("DOMContentLoaded", async () => {
  Log({
    type: "info",
    message: "DOM fully loaded and parsed",
  });

  try {
    // map for the findTags
    const findTags = document.querySelectorAll("badcss");

    findTags.forEach(async (i) => {
      const tag = i;

      // get the component name
      const component = tag.getAttribute("component");
      // check if the component is valid
      if (validComponents.includes(component)) {
        switch (component) {
          case "button": {
            ButtonComponent(tag);
            break;
          }

          case "alert": {
            AlertComponent(tag);
            break;
          }

          case "spinner": {
            SpinnerComponent(tag);
            break;
          }

          case "input": {
            InputComponent(tag);
            break;
          }
        }
      } else {
        // remove element from the DOM
        tag.remove();

        displayError(
          `Invalid component ${component} found. Valid components are ${validComponents.join(
            ", "
          )}`
        );
        // throw an error
        throw new Error(
          `Invalid component ${component} found. Valid components are ${validComponents.join(
            ", "
          )}`
        );
      }
    });
  } catch (error) {
    Log({
      type: "error",
      message: error.message + "from element",
    });
  }
});
