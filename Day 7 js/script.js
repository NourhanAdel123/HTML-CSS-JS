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

for (let i = 0; i < 31; i++) {
  let element = document.createElement("tr");

  let data = document.createElement("td");

  data.textContent = "hello";

  element.appendChild(data);

  table.appendChild(element);
}
