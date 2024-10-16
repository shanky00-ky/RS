// Countdown Timer for the tournament date
function countdown() {
    const eventDate = new Date('2024-12-01T00:00:00').getTime(); // Event Date
    const now = new Date().getTime(); // Current Date
    const timeLeft = eventDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Update countdown display
    document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // Event started
    if (timeLeft < 0) {
        document.getElementById("countdown").innerHTML = "Event started!";
    }
}

// Update countdown every second
setInterval(countdown, 1000);

// Form Validation for Player Registration
function validateForm() {
    let valid = true;

    // Validate team name
    const teamName = document.getElementById("team-name");
    if (teamName.value.trim() === "") {
        teamName.classList.add("is-invalid");
        valid = false;
    } else {
        teamName.classList.remove("is-invalid");
    }

    // Validate email address
    const email = document.getElementById("email");
    const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (!emailPattern.test(email.value)) {
        email.classList.add("is-invalid");
        valid = false;
    } else {
        email.classList.remove("is-invalid");
    }

    // Validate number of players (8 players are required)
    const playerNames = document.querySelectorAll(".player-name");
    let playerCount = 0;
    playerNames.forEach(function (player) {
        if (player.value.trim() !== "") {
            playerCount++;
        }
    });

    if (playerCount !== 8) {
        document.getElementById("player-error").innerText = "You must enter exactly 8 player names.";
        valid = false;
    } else {
        document.getElementById("player-error").innerText = "";
    }

    // Validate terms checkbox
    const terms = document.getElementById("terms");
    if (!terms.checked) {
        document.getElementById("terms-error").innerText = "You must agree to the terms and conditions.";
        valid = false;
    } else {
        document.getElementById("terms-error").innerText = "";
    }

    // If form is valid, proceed to the payment page
    if (valid) {
        window.location.href = "payment.html";
    }
}

// Add Event Listener to the Form Submit Button
document.getElementById("registration-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
    validateForm(); // Call the form validation function
});

// Dynamic Carousel Controls (if needed)
document.querySelectorAll(".carousel-control-prev, .carousel-control-next").forEach(control => {
    control.addEventListener("click", function (event) {
        event.preventDefault();
        const direction = this.classList.contains("carousel-control-prev") ? "prev" : "next";
        $('#mainCarousel').carousel(direction);
    });
});

// Real-Time Feedback for Player Names Input
document.querySelectorAll(".player-name").forEach(playerInput => {
    playerInput.addEventListener("input", function () {
        if (this.value.trim() === "") {
            this.classList.add("is-invalid");
        } else {
            this.classList.remove("is-invalid");
        }
    });
});

// Payment Page Validation
function validatePaymentForm() {
    let valid = true;

    // Validate card number
    const cardNumber = document.getElementById("card-number");
    const cardPattern = /^\d{16}$/; // Simple validation for 16-digit card number
    if (!cardPattern.test(cardNumber.value)) {
        cardNumber.classList.add("is-invalid");
        valid = false;
    } else {
        cardNumber.classList.remove("is-invalid");
    }

    // Validate expiration date (MM/YY format)
    const expiryDate = document.getElementById("expiry-date");
    const expiryPattern = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;
    if (!expiryPattern.test(expiryDate.value)) {
        expiryDate.classList.add("is-invalid");
        valid = false;
    } else {
        expiryDate.classList.remove("is-invalid");
    }

    // Validate CVV (3-digit security code)
    const cvv = document.getElementById("cvv");
    const cvvPattern = /^[0-9]{3}$/;
    if (!cvvPattern.test(cvv.value)) {
        cvv.classList.add("is-invalid");
        valid = false;
    } else {
        cvv.classList.remove("is-invalid");
    }

    // Validate terms checkbox on the payment page
    const paymentTerms = document.getElementById("payment-terms");
    if (!paymentTerms.checked) {
        document.getElementById("payment-terms-error").innerText = "You must agree to the payment terms.";
        valid = false;
    } else {
        document.getElementById("payment-terms-error").innerText = "";
    }

    // If form is valid, show a success message
    if (valid) {
        alert("Payment successful! You will receive a confirmation email shortly.");
        window.location.href = "confirmation.html"; // Redirect to confirmation page
    }
}

// Add Event Listener for the Payment Form
document.getElementById("payment-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
    validatePaymentForm(); // Call payment validation
});
