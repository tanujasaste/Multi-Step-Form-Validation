const formContainer = document.getElementsByClassName("form-container");
const previousBtn = document.getElementById("previous");
const nextBtn = document.getElementById("next");
const submitBtn = document.getElementById("submit");
const steps = document.getElementsByClassName("steps");
const error = document.getElementById("error-message");

let currentStep = 0;

window.onload = () => {
  currentStep = 0;
  steps[currentStep].classList.add("highlight");
  updateStepVisibility(currentStep);
};

const toggleButtonVisibility = () => {
  previousBtn.classList.toggle("hide", currentStep === 0);
  nextBtn.classList.toggle("hide", currentStep === formContainer.length - 1);
  submitBtn.classList.toggle("hide", currentStep !== formContainer.length - 1);
};

const updateStepVisibility = (stepIndex) => {
  for (let i = 0; i < formContainer.length; i++) {
    formContainer[i].classList.toggle("hide", i !== stepIndex);
  }
  toggleButtonVisibility();
};

nextBtn.addEventListener("click", () => {
  if (currentStep < formContainer.length - 1) currentStep++;
  updateStepVisibility(currentStep);
});

previousBtn.addEventListener("click", () => {
  if (currentStep > 0) currentStep--;
  updateStepVisibility(currentStep);
});