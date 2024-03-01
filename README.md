# chroma-gen 
A Versatile Random Color Generator for npm

![Version](https://img.shields.io/badge/version-1.0.1-green)


### Description

`chroma-gen` is a powerful npm package that simplifies the generation of random colors in various formats, including:

- Hex (e.g., `#FFFFFF`)
- Hexa (same as Hex, with alpha channel, e.g., `#FFFFFF80`)
- HSL (Hue, Saturation, Lightness, e.g., `hsl(0, 100%, 50%)`)
- HSLA (HSL with alpha channel, e.g., `hsla(0, 100%, 50%, 0.5)`)
- RGB (Red, Green, Blue, e.g., `rgb(255, 255, 255)`)
- RGBA (RGB with alpha channel, e.g., `rgba(255, 255, 255, 0.5)`)

### Installation

You can easily install `chroma-gen` using npm:

```bash
npm install chroma-gen
```

### Usage

```bash
const chromaGen = require("chroma-gen");
const randomColor = chromaGen(); // Generates a random color in hex format by default
console.log(randomColor);
```

When no arguments are passed, chroma-gen will generate a random color in hex format by default. You can specify the desired color format by passing one of the following parameters: hex, hexa, rgb, rgba, hsl, hsla.


**Credits**

chroma-gen was created and is maintained by Jayaram s kumar.

**Contact**

If you have any questions or suggestions, feel free to reach out to me at kumarjayaram545@gmail.com




