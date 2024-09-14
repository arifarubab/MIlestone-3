// Function to generate resume preview
function generateResumeOutput(resume) {
    var previewDiv = document.getElementById("resumeOutput");
    previewDiv.innerHTML = "\n        <h2>".concat(resume.name, "'s Resume</h2>\n        <p><strong>Email:</strong> ").concat(resume.email, "</p>\n        <p><strong>Phone:</strong> ").concat(resume.phone, "</p>\n        <p><strong>Skills:</strong> ").concat(resume.skills.join(", "), "</p>\n        <p><strong>Experience:</strong> ").concat(resume.experience, "</p>\n        <p><strong>Education:</strong> ").concat(resume.education, "</p>\n    ");
}
// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var skills = document.getElementById("skills").value.split(",");
    var experience = document.getElementById("experience").value;
    var education = document.getElementById("education").value;
    var resume = { name: name, email: email, phone: phone, skills: skills, experience: experience, education: education };
    generateResumeOutput(resume);
}
// Add event listener for form submission
var form = document.getElementById("resumeForm");
form.addEventListener("submit", handleFormSubmit);
