// my cart

var addmycart = document.getElementById("mycartp");

async function getid() {
  const url = window.location.href;
  const strs = url.split("id=");
  const ids = strs.at(-1);

  var addtocarturl = `https://dummyjson.com/products/${ids}`;

  var response = await fetch(addtocarturl);
  var addtocartmovies = await response.json();
  addtocartdata = addtocartmovies;
  addmycart.innerHTML = "";
  var mycartpHtml = `<div class="mycartp"><img class="card-img-top-addtocart" src="${addtocartdata.images[0]}" alt="" height="165px" style="object-fit: cover;">
        <div class="mycartp-body">
        <p class="mycartp-id">Id:${addtocartdata.id}</p>
        <h5 class="mycartp-title">Title: ${addtocartdata.title}</h5>
        <p class="mycartp-text">Price: ${addtocartdata.price}</p>
        </div>
        </div>
        <div>
        <a href="./index.html" target="_self"><button class="buy_button"><i class="fa-solid fa-arrow-left" style="margin-right:5px"></i>Back to home</button></a></div>
        </div>`;
        addmycart.innerHTML += mycartpHtml;
}

getid();
// my cart
// oncroll
function scrollWin() {
  window.scrollBy(0,-10000);
}
window.onscroll = function () {
  scrollUpDown();
};
function scrollUpDown() {
  var scrolbtn = document.querySelector(".scrol");
  if (document.documentElement.scrollTop > 100) {
    scrolbtn.style.display = "block";
  } else {
    scrolbtn.style.display = "none";
  }
}
// oncroll