const galleryLink = document.getElementById('gallery-link');
let currentIndex = 0;

function changeImageAndLink() {
  // Fetch data from the JSON file
  fetch('image_data.json')
    .then((response) => response.json())
    .then((data) => {
      const imageData = data.images;
      const cssVariableValues = data.cssVariables;

      // Get the current image data
      const currentImageData = imageData[currentIndex];

      // Change the link href
      galleryLink.href = currentImageData.linkUrl;

      // Set the background image
      galleryLink.style.backgroundImage = `url(${currentImageData.imageUrl})`;

      // Get the CSS variable values for the current image
      const currentCssVariables = cssVariableValues[currentIndex];

      // Apply CSS variable values
      for (const variable in currentCssVariables) {
        document.documentElement.style.setProperty(variable, currentCssVariables[variable]);
      }

      // Increment the index for the next image
      currentIndex = (currentIndex + 1) % imageData.length;
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
}

// Call the changeImageAndLink function every 4 seconds
setInterval(changeImageAndLink, 4000);
