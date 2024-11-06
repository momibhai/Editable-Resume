var _a;
(_a = document.getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (e) {
    var _a;
    e.preventDefault();
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var phoneElement = document.getElementById("phone");
    var profileElement = document.getElementById("profile");
    var educationElement = document.getElementById("education");
    var experienceElement = document.getElementById("experience");
    var skillElement = document.getElementById("skill");
    if (nameElement && emailElement && phoneElement && profileElement && educationElement && experienceElement && skillElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skill = skillElement.value;
        // Handle the uploaded profile image
        var profileFile = (_a = profileElement.files) === null || _a === void 0 ? void 0 : _a[0];
        var profileURL = profileFile ? URL.createObjectURL(profileFile) : '';
        // Display the resume initially without edit inputs
        var resumeOutputHTML = "\n            <hr>\n            <h2>Generated Resume</h2>\n            ".concat(profileURL ? "<img src=\"".concat(profileURL, "\" alt=\"Profile Image\" width=\"100\" height=\"100\"><br>") : '', "\n            <p><strong>Name:</strong> ").concat(name_1, "</p>\n            <p><strong>Email:</strong> ").concat(email, "</p>\n            <p><strong>Phone:</strong> ").concat(phone, "</p>\n            <hr>\n            <h3>Education</h3>\n            <p>").concat(education, "</p>\n            <h3>Experience</h3>\n            <p>").concat(experience, "</p>\n            <h3>Skills</h3>\n            <p>").concat(skill, "</p>\n            <button onclick=\"editResume()\">Edit</button>\n            <hr>\n        ");
        var resumeOutput = document.getElementById("resumeOutput");
        if (resumeOutput) {
            resumeOutput.style.display = "block";
            resumeOutput.innerHTML = resumeOutputHTML;
        }
    }
    else {
        alert("Please fill all fields");
    }
});
function editResume() {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    var resumeOutput = document.getElementById("resumeOutput");
    if (!resumeOutput)
        return;
    var name = (_a = document.getElementById("name")) === null || _a === void 0 ? void 0 : _a.value;
    var email = (_b = document.getElementById("email")) === null || _b === void 0 ? void 0 : _b.value;
    var phone = (_c = document.getElementById("phone")) === null || _c === void 0 ? void 0 : _c.value;
    var education = (_d = document.getElementById("education")) === null || _d === void 0 ? void 0 : _d.value;
    var experience = (_e = document.getElementById("experience")) === null || _e === void 0 ? void 0 : _e.value;
    var skill = (_f = document.getElementById("skill")) === null || _f === void 0 ? void 0 : _f.value;
    var profileFile = (_h = (_g = document.getElementById("profile")) === null || _g === void 0 ? void 0 : _g.files) === null || _h === void 0 ? void 0 : _h[0];
    var profileURL = profileFile ? URL.createObjectURL(profileFile) : '';
    // Show editable inputs with a Save button
    var editableResumeHTML = "\n        <hr>\n        <h2>Edit Resume</h2>\n        ".concat(profileURL ? "<img src=\"".concat(profileURL, "\" alt=\"Profile Image\" width=\"100\" height=\"100\"><br>") : '', "\n        <label>Name:</label>\n        <input type=\"text\" id=\"editName\" value=\"").concat(name, "\"><br>\n        <label>Email:</label>\n        <input type=\"email\" id=\"editEmail\" value=\"").concat(email, "\"><br>\n        <label>Phone:</label>\n        <input type=\"tel\" id=\"editPhone\" value=\"").concat(phone, "\"><br>\n        <label>Profile Image: (Re-upload)</label>\n        <input type=\"file\" id=\"editProfile\" accept=\"image/*\"><br>\n        <hr>\n        <h3>Education</h3>\n        <textarea id=\"editEducation\">").concat(education, "</textarea><br>\n        <h3>Experience</h3>\n        <textarea id=\"editExperience\">").concat(experience, "</textarea><br>\n        <h3>Skills</h3>\n        <textarea id=\"editSkills\">").concat(skill, "</textarea><br>\n        <button onclick=\"saveEdits()\">Save Changes</button>\n        <hr>\n    ");
    resumeOutput.innerHTML = editableResumeHTML;
}
function saveEdits() {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    var editedName = (_a = document.getElementById("editName")) === null || _a === void 0 ? void 0 : _a.value;
    var editedEmail = (_b = document.getElementById("editEmail")) === null || _b === void 0 ? void 0 : _b.value;
    var editedPhone = (_c = document.getElementById("editPhone")) === null || _c === void 0 ? void 0 : _c.value;
    var editedProfileFile = (_e = (_d = document.getElementById("editProfile")) === null || _d === void 0 ? void 0 : _d.files) === null || _e === void 0 ? void 0 : _e[0];
    var editedProfileURL = editedProfileFile ? URL.createObjectURL(editedProfileFile) : '';
    var editedEducation = (_f = document.getElementById("editEducation")) === null || _f === void 0 ? void 0 : _f.value;
    var editedExperience = (_g = document.getElementById("editExperience")) === null || _g === void 0 ? void 0 : _g.value;
    var editedSkills = (_h = document.getElementById("editSkills")) === null || _h === void 0 ? void 0 : _h.value;
    var resumeOutput = document.getElementById("resumeOutput");
    if (resumeOutput) {
        // Final resume with updated content
        var updatedResume = "\n            <hr>\n            <h2>Updated Resume</h2>\n            ".concat(editedProfileURL ? "<img src=\"".concat(editedProfileURL, "\" alt=\"Updated Profile Image\" width=\"100\" height=\"100\"><br>") : '', "\n            <p><strong>Name:</strong> ").concat(editedName, "</p>\n            <p><strong>Email:</strong> ").concat(editedEmail, "</p>\n            <p><strong>Phone:</strong> ").concat(editedPhone, "</p>\n            <hr>\n            <h3>Education</h3>\n            <p>").concat(editedEducation, "</p>\n            <h3>Experience</h3>\n            <p>").concat(editedExperience, "</p>\n            <h3>Skills</h3>\n            <p>").concat(editedSkills, "</p>\n            <button onclick=\"editResume()\">Edit</button>\n            <hr>\n        ");
        resumeOutput.innerHTML = updatedResume;
    }
}
