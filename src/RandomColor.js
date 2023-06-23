export const generateRandomColor = () => {
  // Generate random values for RGB components (0-255)
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  // Create the RGB color string
  const color = `rgb(${red}, ${green}, ${blue})`;
  return color;
};
