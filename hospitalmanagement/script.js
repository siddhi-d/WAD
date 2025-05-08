document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");
    const patientCount = document.getElementById("patientCount");

    // Retrieve the count of registered patients from localStorage or default to 0
    let registeredPatients = JSON.parse(localStorage.getItem("patients")) || [];
    patientCount.textContent = registeredPatients.length;

    // Handle form submission
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Collect patient data from the form
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const address = document.getElementById("address").value;
        const dob = document.getElementById("dob").value;
        const gender = document.querySelector('input[name="gender"]:checked').value;

        // Create a new patient object
        const newPatient = { name, email, phone, address, dob, gender };

        // Add the new patient to the list and update the patient count
        registeredPatients.push(newPatient);
        localStorage.setItem("patients", JSON.stringify(registeredPatients));

        // Update the patient count displayed on the page
        patientCount.textContent = registeredPatients.length;

        // Reset the form
        form.reset();

        // Optional: Alert or message for successful registration
        alert("Patient registered successfully!");
    });
});
