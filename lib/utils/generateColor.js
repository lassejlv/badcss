export function generateColor(color) {
  // Remove the '#' symbol if present
  const sanitizedColor = color.replace("#", "");

  // Parse the hexadecimal color code to get RGB values
  const red = parseInt(sanitizedColor.substr(0, 2), 16);
  const green = parseInt(sanitizedColor.substr(2, 2), 16);
  const blue = parseInt(sanitizedColor.substr(4, 2), 16);

  // Calculate lighter values for each channel (you can adjust the factor to control the lightness)
  const lightnessFactor = 1.2; // Increase this value for a lighter color
  const lighterRed = Math.min(Math.round(red * lightnessFactor), 255);
  const lighterGreen = Math.min(Math.round(green * lightnessFactor), 255);
  const lighterBlue = Math.min(Math.round(blue * lightnessFactor), 255);

  // Convert back to hexadecimal format
  const lighterColor =
    "#" +
    ((lighterRed << 16) + (lighterGreen << 8) + lighterBlue)
      .toString(16)
      .padStart(6, "0");

  return lighterColor;
}
