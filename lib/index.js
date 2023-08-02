import { ButtonComponent } from "./components/Button.js";
import { AlertComponent } from "./components/Alert.js";

const validComponents = ["button", "alert"];

// Set font on page load
document.body.style.fontFamily = "sans-serif";
document.body.style.margin = "0";
document.body.style.padding = "0";

// Create a style with global colors
const styles = document.createElement("style");
styles.setAttribute("themostbad-css-framework", ":root");

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
  }
`;

// Append the styles to the head
document.head.appendChild(styles);

// Get the "themostbad" from the body tag. To get config
const body = document.getElementsByTagName("body")[0];
const config = body.getAttribute("themostbad");
// Check if the config is valid
if (!config) {
  console.warn("No config found");
}
const configObj = eval("(" + config + ")");

// Check if the config is valid
if (!configObj) {
  console.warn("No config found JSON");
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
body.removeAttribute("themostbad");

// Wait for the DOMContentLoaded event before running the mapping loop
document.addEventListener("DOMContentLoaded", async () => {
  try {
    // map for the findTags
    const findTag = document.getElementsByTagName("themostbad");
    for (let i = 0; i < findTag.length; i++) {
      const tag = findTag[i];
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
            console.log("alert");
            AlertComponent(tag);
            break;
          }
        }
      } else {
        // remove element from the DOM
        tag.remove();

        // throw an error
        throw new Error(`Invalid component ${component}`);
      }
    }
  } catch (error) {
    console.error("Error loading scripts:", error);
  }
});
