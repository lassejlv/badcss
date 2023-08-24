export function displayError(error) {
  const element = document.createElement("div");

  // Style the error element
  element.setAttribute("badcss", "error");
  element.setAttribute("component", "error");
  element.style.backgroundColor = "#eee";
  element.style.position = "fixed";
  element.style.top = "0";
  element.style.left = "0";
  element.style.width = "100vw";
  element.style.height = "100vh";
  element.style.display = "flex";
  element.style.flexDirection = "column";
  element.style.justifyContent = "center";
  element.style.alignItems = "center";
  element.style.zIndex = "999999999";
  element.style.backdropFilter = "blur(5px)";

  const helpDocumentation = [
    {
      keyWords: ["component"],
      url: "https://badcss.dev/components",
    },
    {
      keyWords: ["config", "unexpected token"],
      url: "https://badcss.dev/config",
    },
    {
      keyWords: ["Invalid variant", "Spinner"],
      url: "https://badcss.dev/docs",
    },
  ];

  const helpLink = helpDocumentation.find((doc) =>
    doc.keyWords.some((keyWord) => error.includes(keyWord))
  );

  element.innerHTML = `
      <h1>
          Runtime Error <span style="color: var(--danger)">&times;</span>
      </h1>
      <p style="text-align: center">
        Badcss encountered an error while loading the page.<br />
        ${
          helpLink
            ? `
            Read the documentation for help, this might help you to fix the error.<br />
            <a href="${helpLink.url}" target="_blank" style="color: var(--primary)">
              ${helpLink.url}
            </a>`
            : ""
        }
      </p>
      <p>
        <pre>${error}</pre>
      </p>
    `;

  document.body.appendChild(element);
}
