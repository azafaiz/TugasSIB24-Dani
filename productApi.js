let endpoint = "https://crudcrud.com/api/ddb4e414908c46ef9c87ee3fc44509d9/unicorns";
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
