const sharp = require('sharp');
const fs = require('fs');
const path = require('path'); // Import path module for handling file extensions
const directory = './images';

fs.readdirSync(directory).forEach((file) => {
  const filePath = `${directory}/${file}`;
  const fileName = path.parse(file).name;
  // Small size
  sharp(filePath)
    // .resize(200, 100) // Resize to 200x100
    .webp({ lossless: true }) // Use lossless WebP compression
    .toFile(`${directory}/${fileName}.webp`);

  // // Medium size
  // sharp(`${directory}/${file}`)
  //   // .resize(400, 200) // Resize to 400x200
  //   .webp({ lossless: true }) // Use lossless WebP compression
  //   .toFile(`${directory}/${file}-medium.webp`);

  // // Large size
  // sharp(`${directory}/${file}`)
  //   .resize(600, 300) // Resize to 400x200
  //   .webp({ lossless: true }) // Use lossless WebP compression
  //   .toFile(`${directory}/${file}-large.webp`);
});
