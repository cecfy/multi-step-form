const formSteps = document.querySelectorAll(".form-step");
const nextBtns = document.querySelectorAll(".next-btn");
const prevBtns = document.querySelectorAll(".prev-btn");
const steps = document.querySelectorAll(".step");

let currentStep = 0;

function updateFormSteps() {
    formSteps.forEach((step, index) => {
        step.classList.toggle("active", index === currentStep);
    });

    steps.forEach((step, index) => {
        step.classList.toggle("active", index <= currentStep);
    });
}

nextBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (!validateInputs()) return;
        currentStep++;
        updateFormSteps();
    });
});

prevBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        currentStep--;
        updateFormSteps();
    });
});

function validateInputs() {
    const inputs = formSteps[currentStep].querySelectorAll("input");
    let valid = true;
    
    inputs.forEach((input) => {
        if (input.value.trim() === "") {
            input.style.border = "1px solid red";
            valid = false;
        } else {
            input.style.border = "1px solid #ccc";
        }
    });

    return valid;
}

document.getElementById("multiStepForm").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Form submitted successfully!");
    currentStep = 0;
    updateFormSteps();
});
