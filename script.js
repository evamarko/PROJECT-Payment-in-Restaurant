const amount = parseInt(prompt("Enter amount to be paid in $"));
const tip = parseInt(prompt("Enter tip in %"));
const customers = parseInt(prompt("Enter number of customers"));

const amountAfterTip = (tip * amount) / 100 + amount;
const costPerPerson = amountAfterTip / customers;

const section = document.querySelector(".result");

const p1 = document.createElement("p");
p1.textContent = "Amount to be paid in $: " + amount;
section.prepend(p1);

const p2 = document.createElement("p");
p2.textContent = "Tip in % : " + tip;
section.prepend(p2);

const p3 = document.createElement("p");
p3.textContent = "Amount to be paid after the tip in $ : " + amountAfterTip;
section.prepend(p3);

const p4 = document.createElement("p");
p4.textContent = "Number of customers sharing the bill: " + customers;
section.prepend(p4);

const p5 = document.createElement("p");
p5.textContent =
  "To share the bill one customer from the group will pay: " +
  costPerPerson +
  " $";
section.prepend(p5);
p5.style.fontSize = "30px";
p5.style.fontWeight = 700;
