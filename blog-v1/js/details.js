const id = new URLSearchParams(window.location.search).get("id");
console.log(id);
const container = document.querySelector(".details");

const deleteBtn = document.querySelector(".delete");

const renderDetails = async () => {
  const res = await fetch("http://localhost:3000/blogs/" + id);

  const blog = await res.json();

  console.log(blog);

  const template = `
    <h2>${blog.blogtitle}</h2>
    <p>${blog.blogcontents}</p>
    `;

  container.innerHTML = template;
};

// deleteBtn.addEventListener("click", async (e) => {
//   const res = await fetch("http://localhost:3000/blogs/" + id, {
//     method: "DELETE",
//   });
//  // window.location.replace("/index.html");
// });

window.addEventListener("DOMContentLoaded", () => renderDetails());
