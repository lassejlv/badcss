export function Log(options) {
  const types = ["info", "warn", "error"];
  const DateTime = new Date().toISOString();

  // Check if the type is valid
  if (!options.type) {
    throw new Error("No type found");
  } else {
    let color;

    switch (options.type) {
      case "info":
        color = "#2563eb";
        break;
      case "warn":
        color = "#eab308";
        break;
      case "error":
        color = "#dc2626";
        break;
    }

    // Log the message
    console.log(
      `%c ${DateTime} - ${options.type.toUpperCase()} %c ${options.message}`,
      `background: ${color}; color: white; padding: 2px; border-radius: 2px;`,
      "background: none; color: #999;"
    );
  }
}
