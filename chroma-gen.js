// Function to generate a random color
function generateRandomColor(format = 'hex') {
    let color;
    if (format === 'hex') {
      // Generate random values for red, green, and blue channels
      const red = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
      const green = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
      const blue = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
    
      // Combine the values to form a hexadecimal color code
      color = `#${red}${green}${blue}`;
    } else if (format === 'hexa') {
      // Generate random values for red, green, blue, and alpha channels
      const red = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
      const green = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
      const blue = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
      const alpha = Math.random().toFixed(2);
    
      // Combine the values to form a hexadecimal color code with alpha
      color = `#${red}${green}${blue}${Math.floor(alpha * 255).toString(16).padStart(2, '0')}`;
    } else if (format === 'rgb') {
      // Generate random values for red, green, and blue channels
      const red = Math.floor(Math.random() * 256);
      const green = Math.floor(Math.random() * 256);
      const blue = Math.floor(Math.random() * 256);
    
      // Combine the values to form an RGB color code
      color = `rgb(${red}, ${green}, ${blue})`;
    } else if (format === 'rgba') {
      // Generate random values for red, green, blue, and alpha channels
      const red = Math.floor(Math.random() * 256);
      const green = Math.floor(Math.random() * 256);
      const blue = Math.floor(Math.random() * 256);
      const alpha = Math.random().toFixed(2);
    
      // Combine the values to form an RGBA color code
      color = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
    } else if (format === 'hsl') {
      // Generate random values for hue, saturation, and lightness
      const hue = Math.floor(Math.random() * 360);
      const saturation = Math.floor(Math.random() * 101);
      const lightness = Math.floor(Math.random() * 101);
    
      // Combine the values to form an HSL color code
      color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    } else if (format === 'hsla') {
      // Generate random values for hue, saturation, lightness, and alpha
      const hue = Math.floor(Math.random() * 360);
      const saturation = Math.floor(Math.random() * 101);
      const lightness = Math.floor(Math.random() * 101);
      const alpha = Math.random().toFixed(2);
    
      // Combine the values to form an HSLA color code
      color = `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})`;
    } else {
      throw new Error('Unsupported color format. Supported formats are "hex", "hexa", "rgb", "rgba", "hsl", and "hsla".');
    }
    
    return color;
  }
  


module.exports = generateRandomColor

  
  