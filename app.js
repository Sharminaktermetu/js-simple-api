
    var breakfast ={
        name :"Pasta",
        imgUrl:"https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg?w=740&t=st=1668070956~exp=1668071556~hmac=fe2c17d3fcc685b391317bc29f8985ff16405d22960e790c68912545456d856e",
        capacity: 30,
        farePerKilo: 4,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum animi eligendi corporis sunt iure fugit magni necessitatibus modi quis nostrum!"

    };
    
    var lunch ={
        name :"Biriani",
        imgUrl:"https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg?w=740&t=st=1668070956~exp=1668071556~hmac=fe2c17d3fcc685b391317bc29f8985ff16405d22960e790c68912545456d856e",
        capacity: 30,
        farePerKilo: 4,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum animi eligendi corporis sunt iure fugit magni necessitatibus modi quis nostrum!"

    };
    
    var dinner ={
        name :"Thali",
        imgUrl:"https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg?w=740&t=st=1668070956~exp=1668071556~hmac=fe2c17d3fcc685b391317bc29f8985ff16405d22960e790c68912545456d856e",
        capacity: 30,
        farePerKilo: 4,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum animi eligendi corporis sunt iure fugit magni necessitatibus modi quis nostrum!"

    }



    function getTheTransport(obj) {
     const cardContainer= document.getElementById('card-section');
     cardContainer.innerHTML =`
     <div class="card mb-3 mx-auto" style="max-width: 540px;">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg?w=740&t=st=1668070956~exp=1668071556~hmac=fe2c17d3fcc685b391317bc29f8985ff16405d22960e790c68912545456d856e" class="img-fluid rounded-start h-100 w-100" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${obj.name}</h5>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>
     `
    }
    getTheTransport(bus);