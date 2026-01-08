const ctaButton = document.getElementById("ctaBtn");

ctaButton.addEventListener("click", () => {
  ctaButton.textContent = "Drop coming soon 🔥";
  ctaButton.disabled = true;
  ctaButton.style.opacity = "0.7";
});
const waitlistForm = document.getElementById("waitlistForm");
const emailInput = document.getElementById("emailInput");
const successMsg = document.getElementById("successMsg");

waitlistForm.addEventListener("submit", (e) => {
  e.preventDefault(); // prevent page reload
  const email = emailInput.value.trim();

  if (email) {
    successMsg.style.display = "block";
    emailInput.value = ""; // clear input
  }
});

const sections = document.querySelectorAll(".fade-in");

window.addEventListener("load", () => {
  sections.forEach(section => {
    section.classList.add("show");
  });
});


