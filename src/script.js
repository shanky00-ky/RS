document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevents default form submission
    
    // Logic to ensure fields are filled (optional)
    var teamName = document.getElementById("teamName").value;
    var captainName = document.getElementById("captainName").value;
    var contactEmail = document.getElementById("contactEmail").value;
    var phoneNumber = document.getElementById("phoneNumber").value;

    if (teamName && captainName && contactEmail && phoneNumber) {
        // Redirect to the players.html page
        window.location.href = "players.html";  // Adjust path if needed
    } else {
        alert("Please fill out all fields before submitting.");
    }
});