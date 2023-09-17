// JavaScript to handle showing/hiding imageWindow on button click
const buttons = document.querySelectorAll('.coords_but');
const imageWindow = document.getElementById('imageWindow');

const images = [
    'images/image_01.png',
    'images/image_02.png',
    'images/image_03.png',
    'images/image_04.png',
    'images/image_05.png',
];

const texts = [
    'Brand and Precinct Identification',
    'Wayfinding and User Journey',
    'Landscape Elements',
    'Facades and Built Forms',
    'User Amenity, Lifestyle and Wellbeing',
];

buttons.forEach((button, index) => {
    button.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent click event from reaching window

        // Set the image source and text based on the button clicked
        const imgSrc = images[index];
        const img = imageWindow.querySelector('img');
        img.src = imgSrc;

        const text = imageWindow.querySelector('#imageText');
        text.textContent = texts[index];

        // Show imageWindow
        imageWindow.style.display = 'block';
    });
});

// Add event listener to close imageWindow when clicking anywhere in the window
window.addEventListener('click', () => {
    if (imageWindow.style.display === 'block') {
        imageWindow.style.display = 'none';
    }
});
