// Placeholder
const allProjNames = document.querySelectorAll(".project-name");
const allProjTechs = document.querySelectorAll(".project-tech");
allProjNames.forEach((element) => {
  if (element.textContent === "") {
    element.textContent = "Project Name";
  }
});

allProjTechs.forEach((element) => {
  if (element.textContent === "") {
    element.textContent = "HTML CSS JS";
  }
});
