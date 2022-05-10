let job = "Designer";
let salary = 0;

//Using IF

if (job === "Manager") {
  salary = 8000;
  document.write(`the Salary Will be ${salary}`);
} else if (job === "IT" || job === "Support") {
  salary = 6000;
  document.write(`the Salary Will be ${salary}`);
} else if (job === "Developer" || job === "Designer") {
  salary = 7000;
  document.write(`the Salary Will be ${salary}`);
} else {
  salary = 4000;
  document.write(salary);
}

///Using Switch

switch (job) {
  case "Manager":
    salary = 8000;
    console.log(salary);
    break;

  case "Support":
  case "IT":
    salary = 6000;
    console.log(salary);
    break;

  case "Developer":
  case "Designer":
    salary = 7000;
    console.log(salary);
    break;

  default:
    salary = 4000;
    console.log(salary);
    break;
}
