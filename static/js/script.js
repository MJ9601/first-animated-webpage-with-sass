// variables
let collapseBtn = document.querySelector(".fa-bars");
let navbarList = document.querySelector(".navbar-items");
let navbar = document.querySelector(".navbar");
let popUpImgs = document.querySelectorAll(".imgsrc");
let popUp = document.querySelector("#popUp");
let closePopUpBtn = document.querySelector("#popUpCloseBtn");
let rightRollBtn = document.querySelector(".fa-angle-right");
let leftRollBtn = document.querySelector(".fa-angle-left");

window.addEventListener("DOMContentLoaded", () => {
  collapseBtn.addEventListener("click", () => {
    collapseBtn.classList.toggle("fa-times");
    navbarList.classList.toggle("active");
  });
  window.onscroll = () => {
    collapseBtn.classList.remove("fa-times");
    navbarList.classList.remove("active");
    if (window.scrollY > 10) {
      navbar.classList.add("boxShadow");
    } else {
      navbar.classList.remove("boxShadow");
    }
  };



// popUP
  const imgSrcs = [];
  popUpImgs.forEach((imgElement) => {
    imgSrcs.push(imgElement.src);
    imgElement.addEventListener("click", () => {
      document.querySelector(".popUpContainer").classList.add("active");
      popUp.src = imgElement.src;
      console.log(popUp.src);
    });
  });
  closePopUpBtn.onclick = () => {
    document.querySelector(".popUpContainer").classList.remove("active");
  };

  rightRollBtn.onclick = () => {
    for (let index = 0; index < imgSrcs.length; index++) {
      if (imgSrcs[index] === popUp.src) {
        if (index < imgSrcs.length - 1) {
          popUp.src = imgSrcs[index + 1];
          document
            .querySelector(".fa-angle-right.deactived")
            .classList.remove("deactived");
          document
            .querySelector(".fa-angle-left.deactived")
            .classList.remove("deactived");
          break;
        } else {
          rightRollBtn.classList.add("deactived");
        }
      }
    }
  };
  leftRollBtn.onclick = () => {
    for (let index = 0; index < imgSrcs.length; index++) {
      if (imgSrcs[index] === popUp.src) {
        if (index >= 1) {
          popUp.src = imgSrcs[index - 1];
          document
            .querySelector(".fa-angle-left.deactived")
            .classList.remove("deactived");
          document
            .querySelector(".fa-angle-right.deactived")
            .classList.remove("deactived");
          break;
        } else {
          leftRollBtn.classList.add("deactived");
        }
      }
    }
  };




  // map
  getKey();


  // animation

  AOS.init({
    duration: 1000,
    delay:250
  });

});

async function getKey() {
  let key = await fetch("static/data/key.json");
  let initKey = await key.json();
  let id = [...initKey.key];

  mapboxgl.accessToken = `${id}`;
  var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: [-73.966003, 40.773998],
    zoom: 18,
  });
}
