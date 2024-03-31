document.getElementById("downloadButton").addEventListener("click", function() {
    // You can implement the download functionality here
    // For example, you can use libraries like jsPDF for PDF generation
});
document.getElementById("previewButton").addEventListener("click", function() {
    // Collect user input
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var degree = document.getElementById("degree").value;
    var university = document.getElementById("university").value;
    var graduationYear = document.getElementById("graduationYear").value;
    var jobTitle = document.getElementById("jobTitle").value;
    var company = document.getElementById("company").value;
    var experienceDescription = document.getElementById("experienceDescription").value;
    var skills = document.getElementById("skills").value;

    var hasExperience = jobTitle !== "" && company !== "" && experienceDescription !== "";


    // Construct resume content
    var resumeContent = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <h3>Education</h3>
        <p><strong>Degree:</strong> ${degree}</p>
        <p><strong>University:</strong> ${university}</p>
        <p><strong>Graduation Year:</strong> ${graduationYear}</p>
        ${hasExperience ? `
            <h3>Work Experience</h3>
            <p><strong>Job Title:</strong> ${jobTitle}</p>
            <p><strong>Company:</strong> ${company}</p>
            <p><strong>Description:</strong> ${experienceDescription}</p>
        ` : ''}
        <h3>Skills</h3>
        <p>${skills}</p>
    `;
        
        

    // Display the preview
    document.getElementById("previewContent").innerHTML = resumeContent;
    document.getElementById("preview").style.display = "block";
});

document.getElementById("downloadButton").addEventListener("click", function() {
    // Get the resume content
    var resumeContent = document.getElementById("previewContent").innerHTML;

    // Create a Blob containing the resume content
    var blob = new Blob([resumeContent], { type: "text/html" });

    // Create a temporary anchor element
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "resume.html"; // Change the filename and extension as needed

    // Trigger the download
    document.body.appendChild(a);
    a.click();

    // Clean up
    document.body.removeChild(a);
    URL.revokeObjectURL(a.href);
});

document.getElementById("previewButton").addEventListener("click", function() {
    // Collect user input (same as before)

    // Get selected template
    var selectedTemplate = document.getElementById("template").value;

    // Apply the selected template to the preview section
    if (selectedTemplate === "template1") {
        // Apply Template 1 styling and structure
        document.getElementById("previewContent").innerHTML = "<!-- Template 1 HTML content -->";
    } else if (selectedTemplate === "template2") {
        // Apply Template 2 styling and structure
        document.getElementById("previewContent").innerHTML = "<!-- Template 2 HTML content -->";
    }
    // Add more template conditions as needed

    // Display the preview
    document.getElementById("preview").style.display = "block";
});



