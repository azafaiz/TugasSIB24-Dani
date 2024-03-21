let endpoint = "https://crudcrud.com/api/9bb6f7c066604af482f474d6a3ef2f65/unicorns";
let content = document.getElementById("konten");

let ambil = fetch(endpoint)
  .then((res) => res.json())
  .then((response) => {
    // console.log(response);

    response.forEach((element) => {
      console.log(element);

      konten.innerHTML += `
        <div class="blog-wrapper">
            <div class="blog-card">
                <div class="card-details">
                  <span><i class="fa fa-calendar"></i>${element._id}</span>
                  <p>${element.name}</p>
                </div>
              <div class="card-text"><p>${element.age}</p></div>
            <div class="read-more"><p>${element.colour}</p></div>
        </div>
        `;
    });
  });
