import { ButtonComponent } from "./components/Button.js";
import { AlertComponent } from "./components/Alert.js";
import { generateColor } from "./utils/generateColor.js";
import { SpinnerComponent } from "./components/Spinner.js";
import { Log } from "./utils/Logger.js";

const validComponents = ["button", "alert", "spinner"];

// Set font on page load
document.body.style.fontFamily = "sans-serif";
document.body.style.margin = "0";
document.body.style.padding = "0";

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
  styles.setAttribute("badcss", ":root");

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
    const findTag = document.getElementsByTagName("badcss");
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
            AlertComponent(tag);
            break;
          }

          case "spinner": {
            SpinnerComponent(tag);
            break;
          }
        }
      } else {
        // remove element from the DOM
        tag.remove();

        // throw an error
        throw new Error(
          `Invalid component ${component} found. Valid components are ${validComponents.join(
            ", "
          )}`
        );
      }
    }
  } catch (error) {
    // create new element
    const element = document.createElement("div");

    // style
    element.setAttribute("badcss", "error");
    element.setAttribute("component", "error");
    element.style.backgroundColor = "#eee";
    // make it to a modal
    element.style.position = "fixed";
    element.style.top = "0";
    element.style.left = "0";
    element.style.width = "100vw";
    element.style.height = "100vh";
    // make it to a flexbox
    element.style.display = "flex";
    element.style.flexDirection = "column";
    element.style.justifyContent = "center";
    element.style.alignItems = "center";

    // z-index
    element.style.zIndex
      ? (element.style.zIndex
          ? parseInt(element.style.zIndex) + 1
          : parseInt(element.style.zIndex)) + ""
      : "999999999";

    // blur bg
    element.style.backdropFilter = "blur(5px)";

    const helpDocumention = [
      {
        keyWords: ["component"],
        url: "https://badcss.dev/components",
      },

      {
        keyWords: ["config", "unspected token"],
        url: "https://badcss.dev/config",
      },

      {
        keyWords: ["Invalid variant", "Spinner"],
        url: "https://badcss.dev/docs",
      },
    ];
    // add the error message
    element.innerHTML = `
    <h1>
        Runtime Error <span style="color: var(--danger)">&times;</span>
    </h1>
    <p style="text-align: center">
      Badcss encountered an error while loading the page.<br />
      
      ${
        helpDocumention.find((doc) =>
          doc.keyWords.some((keyWord) => error.message.includes(keyWord))
        )
          ? `
          Read the documentation for help, this might help you to fix the error.<br />
          <a href="${
            helpDocumention.find((doc) =>
              doc.keyWords.some((keyWord) => error.message.includes(keyWord))
            ).url
          }" target="_blank" style="color: var(--primary)">${
              helpDocumention.find((doc) =>
                doc.keyWords.some((keyWord) => error.message.includes(keyWord))
              ).url
            }</a>`
          : ""
      }
      
    </p>
    <p>
    <pre>${error.message}</pre>
    </p>
  `;

    document.body.appendChild(element);

    Log({
      type: "error",
      message: error.message,
    });
  }
});
