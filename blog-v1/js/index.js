// var all_blogs = [];
// function load_blogs() {
//   $.ajax({
//     url: "http://localhost:3000/blogs",
//     type: "GET",
//     success: function (result) {
//       all_blogs = result;
//       console.log(all_blogs);

//       var blog_con = document.getElementById("blogs_container");


//       all_blogs.forEach(element => {
//         var d1 = document.createElement("div");
//         d1.classList.add("blog-div");
//         d1.innerHTML = `<div class="inside-blog">
//          <div class="blog-img">
//          <img src="${element.blogimg}"></div>
//          <div class="blog-info">
//          <div>${element.blogtitle}</div>
//          <div>${element.blogcontents}</div>
//          <div>${element.username}</div>
//          <div>${element.likecount}</div></div></div>`;

//         blog_con.append(d1);

//       });
//     },
//   });




// }


const container = document.querySelector("#blogs_container");

const searchForm = document.querySelector(".search");

const renderPost = async (term) => {


  let uri = "http://localhost:3000/blogs?_sort=likes&_order=desc";


  if (term) {
    uri += `&q=${term}`
  }

  const res = await fetch(uri);

  const blogs = await res.json();

  let template = "";
  blogs.forEach(blog => {

    template += `
        <div class="col mb-4">
        <div class="card">

          <img src="${blog.blogimg}" class="card-img-top img-ht" alt="...">
          <h4 class="card-title">${blog.blogtitle}</h4>

          <div class="card-body">
            <p><small>${blog.likecount} likes</small></p>

            <p class="card-text">${blog.blogcontents.slice(0, 150)}</p>
            <button class="btn btn-primary"> <a href="../html/details.html?id=${blog.id}">Read More </a></button>

          </div>
        </div>
        

        </div>
        
        
        
        `;

  });
  container.innerHTML = template;
}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  renderPost(searchForm.term.value.trim());
})

window.addEventListener("DOMContentLoaded", () => renderPost());