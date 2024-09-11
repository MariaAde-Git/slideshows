// This line declares an array called images containing paths to different images. These images will be used in the slider.
let images = [
    "Assets/Image/web1.webp",
    "Assets/Image/web2.jpg",
    "Assets/Image/web3.jpg",
    "Assets/Image/web4.jpg",
    "Assets/Image/web2.jpg",
    "Assets/Image/web5.jpg",
    "Assets/Image/home.jfif",
    "Assets/Image/tech1.jpg"
];

// This line declares a variable currentIndex and initializes it to 0. It keeps track of the currently displayed image in the slider. The currentIndex is the index in the images array.
let currentIndex = 0;

// This line increments currentIndex by 1 to move to the next image in the array.
function nextSlide(){
// The % images.length part ensures that if currentIndex exceeds the length of the array (i.e., goes beyond the last image), it wraps around to 0, effectively cycling back to the first image.
    currentIndex = (currentIndex + 1) % images.length;
// This line updates the src attribute of an HTML element with the ID slider-image to the image at the current index in the images array, displaying the next image in the slider.
    document.getElementById("slider-image").src = images[currentIndex];
};

// The it is decrementing currentIndex to move to the previous image.
function prevSlide(){
    currentIndex = (currentIndex + 1 + images.length) % images.length;
    document.getElementById("slider-image").src = images[currentIndex];
};