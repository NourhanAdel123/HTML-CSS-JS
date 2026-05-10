const httprequest = new XMLHttpRequest();

httprequest.open(
  "GET",
  "https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza",
);

httprequest.send();

let data = [];
httprequest.addEventListener("readystatechange", () => {
  if (httprequest.readyState == 4) {
    let res = JSON.parse(httprequest.response);
    data = res.data.recipes;
    console.log(data);
    display();
  }
});

function display() {
  let content = "";
  data.map((d) => {
    content += `<div class="card">
    <img src="${d.image_url}">
    <h2>
    ${d.publisher}
    </h2>
    <h4>
    ${d.title}
    </h4>

        </div>
        `;
    let container = document.getElementById("test");
    container.innerHTML = content;
  });
}
