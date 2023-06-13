$(document).ready(function() {
    // Array of image filenames
    var images = [
      'cover.JPG',
      'cover2.jpg',
      'cover3.jpg',
      'cover4.jpg'
    ];
  
    var randomIndex = Math.floor(Math.random() * images.length);
  
    // Get the reference to the existing image element
    var imgElement = $('#image-container');
  
    // Set the src attribute of the existing image element
    imgElement.attr('src', images[randomIndex]);
  });
  