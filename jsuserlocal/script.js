document.addEventListener("DOMContentLoaded", function () {

    // Handle Registration Form Submission (index.html)
    let form = document.getElementById("registrationForm");
    let successMessage = document.getElementById("successMessage");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            // Collect form data
            let firstName = document.getElementById("firstName").value;
            let lastName = document.getElementById("lastName").value;
            let dob = document.getElementById("dob").value;
            let gender = document.querySelector("input[name='gender']:checked") ? document.querySelector("input[name='gender']:checked").value : "";
            let mobile = document.getElementById("mobile").value;
            let email = document.getElementById("email").value;

            // Create new user object
            let newUser = { firstName, lastName, dob, gender, mobile, email };

            // Store user in localStorage
            let storedUsers = JSON.parse(localStorage.getItem("users")) || [];
            storedUsers.push(newUser);  // Add new user to the list
            localStorage.setItem("users", JSON.stringify(storedUsers)); // Save to localStorage

            // Show success message
            document.getElementById("successDetails").innerHTML = `
                <strong>Name:</strong> ${firstName} ${lastName} <br>
                <strong>Email:</strong> ${email} <br>
                <strong>Mobile:</strong> ${mobile} <br>
                <strong>Gender:</strong> ${gender} <br>
                <strong>Date of Birth:</strong> ${dob}
            `;
            successMessage.classList.remove("hidden");

            // Hide success message after 3 seconds
            setTimeout(() => {
                successMessage.classList.add("hidden");
            }, 3000);

            // Reset form
            form.reset();
        });
    }

    // Handle Displaying Users (users.html)
    let fetchUsers = document.getElementById("fetchUsers");
    let clearUsers = document.getElementById("clearUsers");

    // Fetch and display users when the "Refresh List" button is clicked
    if (fetchUsers) {
        fetchUsers.addEventListener("click", displayUsers);
    }

    // Clear all users when the "Clear All Users" button is clicked
    if (clearUsers) {
        clearUsers.addEventListener("click", function () {
            localStorage.removeItem("users");
            displayUsers();  // Update table after removal
            alert("All users have been removed!");
        });
    }

    // Function to display all users from localStorage
    function displayUsers() {
        let userTableBody = document.getElementById("userTableBody");
        userTableBody.innerHTML = "";  // Clear the existing rows
        let users = JSON.parse(localStorage.getItem("users")) || [];

        if (users.length === 0) {
            userTableBody.innerHTML = "<tr><td colspan='6' class='text-center'>No users registered yet!</td></tr>";
        } else {
            users.forEach((user, index) => {
                let row = userTableBody.insertRow();
                row.innerHTML = `
                    <td>${index + 1}</td>
                    <td>${user.firstName} ${user.lastName}</td>
                    <td>${user.email}</td>
                    <td>${user.mobile}</td>
                    <td>${user.dob}</td>
                    <td>${user.gender}</td>
                `;
            });
        }
    }

    // Initial load of user data when the page loads
    displayUsers();
});
