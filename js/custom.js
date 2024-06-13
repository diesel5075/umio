$("#heroslider").owlCarousel({
  loop: true,
  margin: 10,
  items: 1,
  responsiveClass: true,
  animateOut: "fadeOut",
  autoplay: true,
  autoplayTimeout: 2000,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

var data = "";
var productcard = document.getElementById("card");
var url = `https://dummyjson.com/products?limit=${0}&skip=${0}`;

var pages = 1;
var limit = 4;

async function logMovies() {
  url = `https://dummyjson.com/products?limit=${limit}&skip=${
    (pages - 1) * limit
  }`;
  var response = await fetch(url);
  var movies = await response.json();
  data = movies.products;
  productcard.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    var id = (pages - 1) * limit + i + 1;
    var cardHtml = `<div class="card"><img class="card-img-top" src="${data[i].images[0]}" alt="" height="165px" style="object-fit: cover;">
    <div class="card-body">
    <p class="card-id">Id:${data[i].id}</p>
    <h5 class="card-title">Title: ${data[i].title}</h5>
    <p class="card-description">Description: ${data[i].description}</p>
    <p class="card-text">Price: ${data[i].price}</p>
    <p class="card-discountPercentage">DiscountPercentage: ${data[i].discountPercentage}</p>
    <p class="card-rating">Rating: ${data[i].rating}</p>
    <p class="card-stock">Stock: ${data[i].stock}</p>
    <p class="card-brand">Brand: ${data[i].brand}</p>
    <p class="card-category">Category: ${data[i].category}</p>
    <button onclick="datadetail(${data[i].id})" class="buy_button" style="background-color: rgb(255, 63, 64); padding: 5px 30px; color: white; width: 100%; border: none; margin-bottom: 10px; display: inline-block;">Buy Now</button>
    <button onclick="mycart(${data[i].id})" class="buy_button" style="background-color: rgb(212, 212, 212); padding: 5px 30px; color: black; width: 100%; border: none; margin-bottom: 10px; display: inline-block;">add to cart</button>
   `;
    productcard.innerHTML += cardHtml;
  }
}
async function next() {
  pages++;
  logMovies();
}
async function prev() {
  if (pages > 1) {
    pages--;
    logMovies();
  }
}
logMovies();
// fature product
var fdata = "";
var fproductcard = document.getElementById("fcard");
var furl = `https://dummyjson.com/products?limit=${0}&skip=${0}`;

var fpages = 1;
var flimit = 8;

async function flogMovies() {
  furl = `https://dummyjson.com/products?limit=${flimit}&skip=${
    (fpages - 1) * flimit
  }`;
  var fresponse = await fetch(furl);
  var fmovies = await fresponse.json();
  fdata = fmovies.products;
  fproductcard.innerHTML = " ";
  for (let i = 0; i < fdata.length; i++) {
    var id = (fpages - 1) * flimit + i + 1;
    var fcardHtml = `<div class="fcard">
    <img class="fcard-img-top" src="${fdata[i].images[0]}" alt="" height="165px" style="object-fit: cover;"> 
    <div class="fcard-body">
     <h5 class="fcard-title">Title: ${fdata[i].title}</h5>
      <p class="fcard-text">Price: ${fdata[i].price}</p>
      </div>
      </div>
    `;
    fproductcard.innerHTML += fcardHtml;
  }
}
// this data in fcardhtml
{
  /* <p class="fcard-description">Description: ${fdata[i].description}</p> */
}
{
  /* <p class="fcard-fid">Id:${fdata[i].id}</p> */
}
{
  /* <p class="fcard-discountPercentage">DiscountPercentage: ${fdata[i].discountPercentage}</p>
<p class="fcard-rating">Rating: ${fdata[i].rating}</p>
<p class="fcard-stock">Stock: ${fdata[i].stock}</p>
<p class="fcard-brand">Brand: ${fdata[i].brand}</p>
<p class="fcard-category">Category: ${fdata[i].category}</p> */
}
// <button class="buy_button" style="background-color: rgb(255, 63, 64); padding: 5px 30px; color: white; width: 100%; border: none; margin-bottom: 10px; display: inline-block;">Buy Now</button>
// <button class="add_button" style="background-color: rgb(212, 212, 212); color: black; padding: 5px 30px; border: none; width: 100%; display: inline-block;">Add to cart</button></div>
// this data in fcardhtml

async function fnext() {
  fpages++;
  flogMovies();
}
async function fprev() {
  if (fpages > 1) {
    fpages--;
    flogMovies();
  }
}
flogMovies();

// fature product

// Customer feedback
$("#customerfslider").owlCarousel({
  loop: true,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 1000,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 2,
    },
  },
});
// Customer feedback
// Everyday deal
$("#Everydaydeal").owlCarousel({
  loop: true,
  margin: 10,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});
var edata = "";
var eproductcard = document.getElementById("ecard");
var eurl = `https://dummyjson.com/products?limit=${0}&skip=${0}`;

var epages = 1;
var elimit = 1;

async function elogMovies() {
  eurl = `https://dummyjson.com/products?limit=${elimit}&skip=${
    (epages - 1) * elimit
  }`;
  var eresponse = await fetch(eurl);
  var emovies = await eresponse.json();
  edata = emovies.products;
  eproductcard.innerHTML = "";
  for (let i = 0; i < edata.length; i++) {
    var id = (epages - 1) * elimit + i + 1;
    var ecardHtml = `<div class="ecard">
    <img class="ecard-img-top" src="${edata[i].images[0]}" alt="" height="300px" width="314px" style="object-fit: cover;"> 
    <div class="ecard-body">
     <div class="both_heart d-flex  justify-content-between  align-item-center">
     <div class="both_inner">
     <h5 class="ecard-title">Title: ${edata[i].title}</h5>
      <p class="ecard-text">Price: ${edata[i].price}</p>
     </div>
     <div class="both_inner">
     <i class="fa-regular fa-heart"></i>
     </div>
     </div>
      
    <div class="etime d-flex">
    <div class="costumday">
    <p id="day"></p><br>
    <p id="dayt"></p>
    </div>
    <div class="costumday">
    <p id="hour"></p><br>
    <p id="hourt"></p>
    
    </div>
    <div class="costumday">
    <p id="minute"></p><br>
    <p id="minutet"></p>
    </div>
    <div class="costumday">
    <p id="second"></p><br>
    <p id="secondt"></p>
    </div>

    </div>
      <div class="qa_button d-flex  justify-content-between">
      <button class="Quickview_button" style="background-color: white;padding: 5px 30px; color: black; width: 45%; border: none; display: inline-block;">Quickview</button>
      <button class="Add to cart_button" style="background-color: white; color: black; padding: 5px 30px; border: none; width: 45%; display: inline-block;">Add to cart</button></div>
      </div>
      </div>
      </div>
    `;
    eproductcard.innerHTML += ecardHtml;
  }
}

async function enext() {
  epages++;
  elogMovies();
}
async function eprev() {
  if (epages > 1) {
    epages--;
    elogMovies();
  }
}
elogMovies();

if (window.location.pathname == "/addtocart.html") {
} else {
  function updateClock() {
    const now = new Date();
    const day = now.getDate();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();
    document.getElementById("day").textContent = ` ${day}`;
    document.getElementById("dayt").textContent = `day`;
    document.getElementById("hour").textContent = ` ${hour}`;
    document.getElementById("hourt").textContent = `Hour`;
    document.getElementById("minute").textContent = ` ${minute}`;
    document.getElementById("minutet").textContent = `Minute`;
    document.getElementById("second").textContent = ` ${second}`;
    document.getElementById("secondt").textContent = `Second`;
  }

  setInterval(updateClock, 1000);
}
// updateClock();

// Everyday deal

// Every latest blog
$("#latest").owlCarousel({
  loop: true,
  margin: 10,
  autoplay: true,
  dots: false,
  autoplayTimeout: 1000,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 3,
    },
  },
});
// Every latest blog

// add to cart set
function datadetail(id) {
  let url = new URL("http://127.0.0.1:5500/addtocart.html");
  url.searchParams.set("id", `${id}`);
  window.location.href = url;
}
// add to cart set
// my cart
function mycart(id) {
  let url = new URL("http://127.0.0.1:5500/mycart.html");
  url.searchParams.set("id", `${id}`);
  window.location.href = url;
}
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
  if (document.documentElement.scrollTop > 300) {
    scrolbtn.style.display = "block";
  } else {
    scrolbtn.style.display = "none";
  }
}
// oncroll

