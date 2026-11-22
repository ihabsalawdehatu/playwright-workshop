// --------------------------------------------------
// Workshop Registration
// --------------------------------------------------


// Get the form

const form =
    document.getElementById("registrationForm");


// Get the form controls

const fullName =
    document.getElementById("fullName");

const email =
    document.getElementById("email");

const workshop =
    document.getElementById("workshop");

const experience =
    document.getElementById("experience");

const terms =
    document.getElementById("terms");


// Get the validation message elements

const nameError =
    document.getElementById("nameError");

const emailError =
    document.getElementById("emailError");

const workshopError =
    document.getElementById("workshopError");

const experienceError =
    document.getElementById("experienceError");

const termsError =
    document.getElementById("termsError");


// Get the final result element

const resultMessage =
    document.getElementById("resultMessage");


// --------------------------------------------------
// Form submission
// --------------------------------------------------

form.addEventListener("submit", function (event) {

    // Stop the browser submitting the form normally

    event.preventDefault();


    // Remove messages from a previous attempt

    clearMessages();


    let valid = true;


    // --------------------------------------------------
    // Validate Full Name
    // --------------------------------------------------

    if (fullName.value.trim() === "") {

        nameError.textContent =
            "Full name is required.";

        valid = false;
    }


    // --------------------------------------------------
    // Validate Email
    // --------------------------------------------------

    if (!isValidEmail(email.value.trim())) {

        emailError.textContent =
            "Enter a valid email address.";

        valid = false;
    }


    // --------------------------------------------------
    // Validate Workshop
    // --------------------------------------------------

    if (workshop.value === "") {

        workshopError.textContent =
            "Select a workshop.";

        valid = false;
    }


    // --------------------------------------------------
    // Validate Experience Level
    // --------------------------------------------------

    if (experience.value === "") {

        experienceError.textContent =
            "Select your experience level.";

        valid = false;
    }


    // --------------------------------------------------
    // Validate Terms
    // --------------------------------------------------

    if (!terms.checked) {

        termsError.textContent =
            "You must accept the workshop terms.";

        valid = false;
    }


    // Stop if basic validation failed

    if (!valid) {
        return;
    }


    // Check workshop-specific requirements

    checkWorkshopRequirement();
});


// --------------------------------------------------
// Email validation
// --------------------------------------------------

function isValidEmail(emailAddress) {

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailPattern.test(emailAddress);
}


// --------------------------------------------------
// Workshop requirements
// --------------------------------------------------

function checkWorkshopRequirement() {

    /*
     * Advanced Browser Testing requires
     * Intermediate or Advanced experience.
     */

    if (
        workshop.value === "browser-testing" &&
        experience.value === "beginner"
    ) {

        showFailure(
            "Advanced Browser Testing requires Intermediate or Advanced experience."
        );

        return;
    }


    // All requirements have been satisfied

    showSuccess();
}


// --------------------------------------------------
// Successful registration
// --------------------------------------------------

function showSuccess() {

    resultMessage.textContent =
        "Registration successful for " +
        fullName.value.trim() +
        ".";

    resultMessage.className =
        "result-message success";
}


// --------------------------------------------------
// Failed registration
// --------------------------------------------------

function showFailure(message) {

    resultMessage.textContent =
        message;

    resultMessage.className =
        "result-message failure";
}


// --------------------------------------------------
// Clear previous messages
// --------------------------------------------------

function clearMessages() {

    nameError.textContent = "";

    emailError.textContent = "";

    workshopError.textContent = "";

    experienceError.textContent = "";

    termsError.textContent = "";

    resultMessage.textContent = "";

    resultMessage.className =
        "result-message";
}
