const nameElement = document.getElementById("name");
const jobTitle = document.getElementById("job-title");

const nameText = "Lorenzo Zemp";
const jobText = "Front End Developer";

let doneTypingName = false;

let i = 0,
  j = 0;

function typeName() {
  if (i < nameText.length) {
    nameElement.innerHTML += nameText.charAt(i);
    console.log(nameText.charAt[i]);
    console.log(i);
    i++;
    setTimeout(typeName, 150);
  }
  if (i == nameText.length) {
    console.log("here");
    typeJob();
  }
}

function typeJob() {
  if (j < jobText.length) {
    jobTitle.innerHTML += jobText.charAt(j);
    j++;
    setTimeout(typeJob, 150);
  }
}

typeName();
