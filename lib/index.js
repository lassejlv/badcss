import { ButtonComponent } from "./components/Button.js";

const validComponents = ["button"];

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
    --secondary: #475569;
    --danger: #dc2626;
    --success: #16a34a; 
    --warning: #eab308;
    --info: #06b6d4;
    --dark: #19191a;
    --light: #f2f2f2;
  }
`;

// Append the styles to the head
document.head.appendChild(styles);

// Get the "themostbad" from the body tag. To get config
const body = document.getElementsByTagName("body")[0];
const config = body.getAttribute("themostbad");
const configObj = eval("(" + config + ")");
console.log(configObj.plugins);

// Allowed plugins
const allowedPlugins = ["fontawesome"];
const dataPlugins = {
  fontawesome: `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/${
    configObj.plugins.fontawesome.version || "6.4.0"
  }/css/all.min.css" />`,
};

// Check if the plugin is valid

// Load the plugins
if (configObj.plugins.fontawesome) {
  document.head.innerHTML += configObj.plugins.fontawesome.kitId
    ? `<script src="https://kit.fontawesome.com/${configObj.plugins.fontawesome.kitId}.js" crossorigin="anonymous"></script>`
    : dataPlugins.fontawesome;
}

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