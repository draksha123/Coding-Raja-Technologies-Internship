// Add event listener for login form submission
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Retrieve username and password from form
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Perform authentication (You can use any method for authentication here)

    // If authentication is successful, save user details and redirect to resume builder
    if (username === "yourUsername" && password === "yourPassword") {
        localStorage.setItem("loggedIn", true);
        window.location.href = "resume-builder.html";
    } else {
        alert("Invalid username or password. Please try again.");
    }
});

// Check if user is logged in
if (!localStorage.getItem("loggedIn")) {
    // Redirect to login page if not logged in
    window.location.href = "login.html";
}

// Add event listeners and implement resume builder functionality

document.addEventListener("DOMContentLoaded", function() {
    // Add event listener for form submission
    document.getElementById("resume-form").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission

        // Retrieve form data
        var formData = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            degree: document.getElementById("degree").value,
            university: document.getElementById("university").value,
            graduationYear: document.getElementById("graduationYear").value,
            jobTitle: document.getElementById("jobTitle").value,
            company: document.getElementById("company").value,
            experienceDescription: document.getElementById("experienceDescription").value,
            skills: document.getElementById("skills").value
        };

        // Generate resume content
        var resumeContent = `
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Phone:</strong> ${formData.phone}</p>
            <h3>Education</h3>
            <p><strong>Degree:</strong> ${formData.degree}</p>
            <p><strong>University:</strong> ${formData.university}</p>
            <p><strong>Graduation Year:</strong> ${formData.graduationYear}</p>
            <h3>Work Experience</h3>
            <p><strong>Job Title:</strong> ${formData.jobTitle}</p>
            <p><strong>Company:</strong> ${formData.company}</p>
            <p><strong>Description:</strong> ${formData.experienceDescription}</p>
            <h3>Skills</h3>
            <p>${formData.skills}</p>
        `;

        // Display the generated resume content
        document.getElementById("preview-content").innerHTML = resumeContent;
    });

    // Add event listener for download buttons
    document.getElementById("download-pdf").addEventListener("click", function() {
        // Code to download resume as PDF
    });

    document.getElementById("download-docx").addEventListener("click", function() {
        // Code to download resume as DOCX
    });
});




// Function to handle form submission
function handleResumeSubmit(event) {
    event.preventDefault();
    // Get form data
    const formData = new FormData(event.target);
    // Process form data and generate resume preview
    generateResumePreview(formData);
}

// Function to generate resume preview
function generateResumePreview(formData) {
    // Clear previous preview
    const previewArea = document.getElementById('preview-area');
    previewArea.innerHTML = '';

    // Create resume preview elements based on form data
    // ...

    // Append preview elements to preview area
    previewArea.appendChild(/* resume preview elements */);
}

// Add event listener to form
const resumeForm = document.getElementById('resume-form');
resumeForm.addEventListener('submit', handleResumeSubmit);