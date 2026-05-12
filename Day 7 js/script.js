// let heading = document.querySelectorAll("h1");

// for (let i = 0; i < heading.length; i++) {
//   heading[i].addEventListener("click", function (e) {
//     console.log(e.target.innerHTML);
//   });
// }

let headings = document.getElementById("headings");
headings.addEventListener("click", function (e) {
  console.log(e.target.innerHTML);
});

let options = document.getElementById("select");
for (let i = 1970; i < 2027; i++) {
  let content = document.createElement("option");
  content.textContent = i;
  options.appendChild(content);
}
let table = document.getElementById("table");

// Create header row
let headerRow = document.createElement("tr");

for (let i = 0; i < 5; i++) {
  let th = document.createElement("th");
  th.textContent = "title";
  headerRow.appendChild(th);
}

table.appendChild(headerRow);

// Create data rows
for (let i = 0; i < 31; i++) {
  let row = document.createElement("tr");

  for (let j = 0; j < 5; j++) {
    let td = document.createElement("td");
    td.textContent = "hello";
    row.appendChild(td);
  }

  table.appendChild(row);
}
