function addNewWEField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("weField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Enter here");

  let weOb = document.getElementById("we");
  let weAddButtonOb = document.getElementById("weAddButton");

  weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewAQField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("eqField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Enter here");

  let aqOb = document.getElementById("aq");
  let aqAddButtonOb = document.getElementById("aqAddButton");

  aqOb.insertBefore(newNode, aqAddButtonOb);
}



function printCV() {
  window.print();
}

function generateCV() {
  // Get input values
  var name = document.getElementById('nameField').value;
  var contact = document.getElementById('contactField').value;
  var dob = document.getElementById('dobField').value;
  var address = document.getElementById('addressField').value;
  var github = document.getElementById('githubField').value;
  var fb = document.getElementById('fbField').value;
  var insta = document.getElementById('instaField').value;
  var linkedin = document.getElementById('linkedField').value;
  var objective = document.getElementById('objectiveField').value;
  var workExperience = document.getElementById('WorkExperienceField').value;
  var academicQualification = document.getElementById('eqField').value;
  var skills = document.getElementById('skillsField').value;
  var certificates = document.getElementById('certificatesField').value;
  var internships = document.getElementById('internshipsField').value;
  var projects = document.getElementById('projectsField').value;

  // Get the uploaded image
  var uploadedImage = document.getElementById('imgField').files[0];
  var imageURL = '';

  // Check if an image is uploaded
  if (uploadedImage) {
    // Check if the uploaded file is a jpg, jpeg, or png
    var fileType = uploadedImage.type.split('/')[1];
    if (fileType === 'jpg' || fileType === 'jpeg' || fileType === 'png') {
      // Create a URL for the image
      imageURL = URL.createObjectURL(uploadedImage);
    }
  }

  // Create a new window for the resume
  var newWindow = window.open('', '_blank');
  
  // Construct the HTML content for the resume
  var resumeContent = `
  <html>
  <head>
    <title>Resume - ${name}</title>
    <style>
      /* Add your custom styles for the resume here */
      .profile-img {
        position: absolute;
        top: 10px;
        right: 10px;
        width: 100px; /* Adjust the size as needed */
        height: auto; /* Maintain aspect ratio */
        border-radius: 50%; /* Make the image circular */
      }
    </style>
  </head>
  <body>
    ${imageURL ? `<img src="${imageURL}" alt="Profile Picture" class="profile-img">` : ''}
    <h1>${name}</h1>
    <p>Contact: ${contact}</p>
    <p>Date of Birth: ${dob}</p>
    <p>Address: ${address}</p>
    <p>GitHub: ${github}</p>
    <p>Facebook: ${fb}</p>
    <p>Instagram: ${insta}</p>
    <p>LinkedIn: ${linkedin}</p>
    <h2>Professional Information</h2>
    <p>Objective: ${objective}</p>
    ${workExperience ? `<p>Work Experience: ${workExperience}</p>` : ''}
    <p>Academic Qualification: ${academicQualification}</p>
    <p>Skills: ${skills}</p>
    <p>Certificates: ${certificates}</p>
    <p>Internships: ${internships}</p>
    <p>Projects: ${projects}</p>
  </body>
  </html>
  `;

  // Write the HTML content to the new window
  newWindow.document.write(resumeContent);
}
