// List of image URLs to preload
const imageUrls = [
    '../images/balloons.png',
    'https://drive.google.com/file/d/1UwbR-4G04F4b8cAMUMsYvVjWRXIZKphS/view?usp=sharing',
    'https://drive.google.com/file/d/1644kBEDgWOruq_2WaH6lrn-qgdMf6C71/view?usp=sharing'
    // Add more image URLs as needed
];

// Function to preload images
function preloadImages(urls) {
    urls.forEach(url => {
        const img = new Image(); // Create new Image object
        img.src = url; // Set the src attribute to preload the image
    });
}

// Call the preloadImages function with the array of image URLs
preloadImages(imageUrls);