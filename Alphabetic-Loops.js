/*
  Loop Implementation with Special Cases (Alphabetic)
*/

let myManagers = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = [
  "Amgad",
  "Samah",
  "Ameer",
  "Omar",
  "Othman",
  "Amany",
  "Samia",
  "Anwar",
];

document.write(`<h1>We Have ${myManagers.length - 2} Managers </h1>`);
for (let i = 0; myManagers[i] != "Stop"; i++) {
  document.write(
    `<h2>The Manager for Team ${myManagers[i].charAt(0)}  is ${
      myManagers[i]
    }</h2>`
  );
  document.write("<hr>");
  document.write("<h3>Team Members:</h3>");
  let k = 0;
  for (let j = 0; j < myEmployees.length; j++) {
    if (myManagers[i].charAt(0) === myEmployees[j].charAt(0)) {
      document.write(`<h3>  ${k + 1} - ${myEmployees[j]}</h3>`);
    } else continue;
    k++;
  }
}
