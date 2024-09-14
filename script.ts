// Define the types for Resume data
interface Resume {
    name: string;
    email: string;
    contact: string;
    education: string;
    experience: string;
    skills: string;
}

// Handle form submission
function handleFormSubmit(event: Event): void {
    event.preventDefault(); // Prevents the form from submitting and reloading the page

    // Collect form values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const contact = (document.getElementById('contact') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

    // Create a Resume object from the form values
    const resume: Resume = { name, email, contact, education, experience, skills };

    // Generate the resume preview
    generateResume(resume);
}

// Function to generate the resume HTML content
function generateResume(resume: Resume): void {
    const resumeOutput = `
        <h2>${resume.name}'s Resume</h2>
        <p><strong>Email:</strong> ${resume.email}</p>
        <p><strong>Phone:</strong> ${resume.contact}</p>
        <h3>Education</h3>
        <p>${resume.education}</p>
        <h3>Experience</h3>
        <p>${resume.experience}</p>
        <h3>Skills</h3>
        <p>${resume.skills}</p>
    `;

    // Insert the generated resume into the output div
    const outputDiv = document.getElementById('resumeOutput') as HTMLElement;
    outputDiv.innerHTML = resumeOutput;
}

// Add an event listener for the form submission
const form = document.getElementById('resumeForm') as HTMLFormElement;
form.addEventListener('submit', handleFormSubmit);