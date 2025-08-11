const toggleBtn = document.getElementById("theme-toggle") as HTMLButtonElement;

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
  toggleBtn.textContent = "☀️ Light Mode";
}

toggleBtn.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark-mode");

  // Save preference
  localStorage.setItem("theme", isDark ? "dark" : "light");

  // Update button text
  toggleBtn.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
});