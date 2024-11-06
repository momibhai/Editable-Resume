document.getElementById("resumeForm")?.addEventListener("submit", function (e) {
    e.preventDefault();

    const nameElement = document.getElementById("name") as HTMLInputElement | null;
    const emailElement = document.getElementById("email") as HTMLInputElement | null;
    const phoneElement = document.getElementById("phone") as HTMLInputElement | null;
    const profileElement = document.getElementById("profile") as HTMLInputElement | null;
    const educationElement = document.getElementById("education") as HTMLTextAreaElement | null;
    const experienceElement = document.getElementById("experience") as HTMLTextAreaElement | null;
    const skillElement = document.getElementById("skill") as HTMLTextAreaElement | null;

    if (nameElement && emailElement && phoneElement && profileElement && educationElement && experienceElement && skillElement) {
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skill = skillElement.value;

        // Handle the uploaded profile image
        const profileFile = profileElement.files?.[0];
        const profileURL = profileFile ? URL.createObjectURL(profileFile) : '';

        // Display the resume initially without edit inputs
        const resumeOutputHTML = `
            <hr>
            <h2>Generated Resume</h2>
            ${profileURL ? `<img src="${profileURL}" alt="Profile Image" width="100" height="100"><br>` : ''}
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <hr>
            <h3>Education</h3>
            <p>${education}</p>
            <h3>Experience</h3>
            <p>${experience}</p>
            <h3>Skills</h3>
            <p>${skill}</p>
            <button onclick="editResume()">Edit</button>
            <hr>
        `;

        const resumeOutput = document.getElementById("resumeOutput");

        if (resumeOutput) {
            resumeOutput.style.display = "block";
            resumeOutput.innerHTML = resumeOutputHTML;
        }
    } else {
        alert("Please fill all fields");
    }
});

function editResume() {
    const resumeOutput = document.getElementById("resumeOutput");
    if (!resumeOutput) return;

    const name = (document.getElementById("name") as HTMLInputElement)?.value;
    const email = (document.getElementById("email") as HTMLInputElement)?.value;
    const phone = (document.getElementById("phone") as HTMLInputElement)?.value;
    const education = (document.getElementById("education") as HTMLTextAreaElement)?.value;
    const experience = (document.getElementById("experience") as HTMLTextAreaElement)?.value;
    const skill = (document.getElementById("skill") as HTMLTextAreaElement)?.value;
    const profileFile = (document.getElementById("profile") as HTMLInputElement)?.files?.[0];
    const profileURL = profileFile ? URL.createObjectURL(profileFile) : '';

    // Show editable inputs with a Save button
    const editableResumeHTML = `
        <hr>
        <h2>Edit Resume</h2>
        ${profileURL ? `<img src="${profileURL}" alt="Profile Image" width="100" height="100"><br>` : ''}
        <label>Name:</label>
        <input type="text" id="editName" value="${name}"><br>
        <label>Email:</label>
        <input type="email" id="editEmail" value="${email}"><br>
        <label>Phone:</label>
        <input type="tel" id="editPhone" value="${phone}"><br>
        <label>Profile Image: (Re-upload)</label>
        <input type="file" id="editProfile" accept="image/*"><br>
        <hr>
        <h3>Education</h3>
        <textarea id="editEducation">${education}</textarea><br>
        <h3>Experience</h3>
        <textarea id="editExperience">${experience}</textarea><br>
        <h3>Skills</h3>
        <textarea id="editSkills">${skill}</textarea><br>
        <button onclick="saveEdits()">Save Changes</button>
        <hr>
    `;

    resumeOutput.innerHTML = editableResumeHTML;
}

function saveEdits() {
    const editedName = (document.getElementById("editName") as HTMLInputElement)?.value;
    const editedEmail = (document.getElementById("editEmail") as HTMLInputElement)?.value;
    const editedPhone = (document.getElementById("editPhone") as HTMLInputElement)?.value;
    const editedProfileFile = (document.getElementById("editProfile") as HTMLInputElement)?.files?.[0];
    const editedProfileURL = editedProfileFile ? URL.createObjectURL(editedProfileFile) : '';
    const editedEducation = (document.getElementById("editEducation") as HTMLTextAreaElement)?.value;
    const editedExperience = (document.getElementById("editExperience") as HTMLTextAreaElement)?.value;
    const editedSkills = (document.getElementById("editSkills") as HTMLTextAreaElement)?.value;

    const resumeOutput = document.getElementById("resumeOutput");

    if (resumeOutput) {
        // Final resume with updated content
        const updatedResume = `
            <hr>
            <h2>Updated Resume</h2>
            ${editedProfileURL ? `<img src="${editedProfileURL}" alt="Updated Profile Image" width="100" height="100"><br>` : ''}
            <p><strong>Name:</strong> ${editedName}</p>
            <p><strong>Email:</strong> ${editedEmail}</p>
            <p><strong>Phone:</strong> ${editedPhone}</p>
            <hr>
            <h3>Education</h3>
            <p>${editedEducation}</p>
            <h3>Experience</h3>
            <p>${editedExperience}</p>
            <h3>Skills</h3>
            <p>${editedSkills}</p>
            <button onclick="editResume()">Edit</button>
            <hr>
        `;
        resumeOutput.innerHTML = updatedResume;
    }
}
