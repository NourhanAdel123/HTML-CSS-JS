let main = document.getElementById("main");

async function fetchUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  users.forEach((user) => {
    let card = document.createElement("div");
    card.classList.add("card");

    let btn = document.createElement("button");
    btn.textContent = "View Posts";

    let postTitle = document.createElement("p");

    btn.addEventListener("click", async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${user.id}/posts`,
      );
      const posts = await res.json();

      postTitle.innerHTML = "";

      if (posts.length > 0) {
        posts.slice(0, 5).forEach((post) => {
          let p = document.createElement("p");
          p.textContent = post.title;
          postTitle.appendChild(p);
        });
      } else {
        postTitle.textContent = "No posts found";
      }
    });

    card.innerHTML = `
      <h3>${user.name}</h3>
      <p>${user.email}</p>
    `;

    card.appendChild(btn);
    card.appendChild(postTitle);
    main.appendChild(card);
  });
}

fetchUsers();
