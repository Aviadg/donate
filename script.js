document.getElementById("donationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // prevent form submission
    // Retrieve form data
    var firstName = document.getElementById("firstName").value;
    var familyName = document.getElementById("familyName").value;
    var donationType = document.getElementById("donationType").value;
    var amount = document.getElementById("amount").value;
    var preferredArea = document.getElementById("preferredArea").value;

    // Validate form data
    if (firstName === "" || familyName === "" || donationType === "" || amount === "" || preferredArea === "") {
        alert("Please fill in all fields.");
        return;
    }

    // Send form data to server (you can customize this part based on your backend)
    // For example, you can use fetch() or XMLHttpRequest to send a POST request to your server
    // with the form data in the request body

    // Example using fetch():
    fetch("/submit", {
        method: "POST",
        body: JSON.stringify({
            firstName: firstName,
            familyName: familyName,
            donationType: donationType,
            amount: amount,
            preferredArea: preferredArea
        }),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(function(response) {
        if (response.ok) {
            alert("Form data submitted successfully!");
            // Reset form
            document.getElementById("donationForm").reset();
        } else {
            alert("Failed to submit form data. Please try again later.");
        }
    })
    .catch(function(error) {
        console.error(error);
    });
});
