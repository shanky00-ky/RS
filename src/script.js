// Function to show the selected section and hide others
function showSection(sectionId) {
    // Get all sections with class 'section'
    const sections = document.querySelectorAll('.section');

    // Loop through sections and hide them
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';
}

// Event listener for navigation links to handle clicks
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = this.getAttribute('href').substring(1); // Get target section ID
        showSection(target); // Show the clicked section
    });
});

// Countdown Timer Logic
const eventDate = new Date("2024-12-15T09:00:00").getTime();
const countdownElement = document.getElementById('countdown');
const countdownInterval = setInterval(() => {
    const now = new Date().getTime();
    const distance = eventDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
        clearInterval(countdownInterval);
        countdownElement.innerHTML = "Event Started!";
    }
}, 1000);

// Carousel initialization
const carouselElements = document.querySelectorAll('.carousel');
carouselElements.forEach(carousel => {
    new bootstrap.Carousel(carousel, {
        interval: 3000,
        pause: 'hover'
    });
});


// Form Validation for Player Registration
document.getElementById('registration-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const playerNames = document.querySelectorAll('.player-name');
    let valid = true;

    playerNames.forEach(input => {
        if (input.value.trim() === "") {
            input.classList.add('is-invalid');
            valid = false;
        } else {
            input.classList.remove('is-invalid');
        }
    });

    if (valid) {
        alert('Registration Successful!');
        // You can submit the form or process the data here
    } else {
        alert('Please fill in all player names');
    }
});
// Get modal element and modal content
const modal = document.getElementById('galleryModal');
const modalImg = document.getElementById('modalImage');
const captionText = document.getElementById('caption');
const closeBtn = document.querySelector('.close');

// Get all gallery items (both images and videos)
const galleryItems = document.querySelectorAll('.gallery-item img');

// Get previous and next buttons
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Initialize index for tracking current image
let currentIndex = 0;

// Function to open the modal with the clicked image
function openModal(index) {
    modal.style.display = "block";
    modalImg.src = galleryItems[index].src;
    captionText.innerHTML = galleryItems[index].alt;
    currentIndex = index;
}

// Close the modal when the close button is clicked
closeBtn.addEventListener('click', function() {
    modal.style.display = "none";
});

// Loop through each image and add click event to open modal
galleryItems.forEach((item, index) => {
    item.addEventListener('click', function() {
        openModal(index);
    });
});

// Show previous image in the modal
prevBtn.addEventListener('click', function() {
    currentIndex = (currentIndex === 0) ? galleryItems.length - 1 : currentIndex - 1;
    updateModalContent();
});

// Show next image in the modal
nextBtn.addEventListener('click', function() {
    currentIndex = (currentIndex === galleryItems.length - 1) ? 0 : currentIndex + 1;
    updateModalContent();
});

// Function to update modal content when navigating
function updateModalContent() {
    modalImg.src = galleryItems[currentIndex].src;
    captionText.innerHTML = galleryItems[currentIndex].alt;
}

// Close modal when clicking outside the image
modal.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
