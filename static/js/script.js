// variables
let collapseBtn = document.querySelector('.fa-bars');
let navbarList = document.querySelector('.navbar-items');
let navbar = document.querySelector('.navbar');
let popUpImgs = document.querySelectorAll('.imgsrc');
let popUp = document.querySelector('#popUp');
let closePopUpBtn = document.querySelector("#popUpCloseBtn");



window.addEventListener('DOMContentLoaded', () => {
  collapseBtn.addEventListener('click', () => {
    collapseBtn.classList.toggle('fa-times');
    navbarList.classList.toggle('active');
  });
  window.onscroll = () =>{
    collapseBtn.classList.remove("fa-times");
    navbarList.classList.remove("active");
    if (window.scrollY > 10) {
      navbar.classList.add("boxShadow");
    }else{
      navbar.classList.remove("boxShadow");
    }
  };


  popUpImgs.forEach(imgElement => {
    imgElement.addEventListener('click', () => {
      document.querySelector('.popUpContainer').classList.add('active');
      popUp.src = imgElement.src;
    });
  });
  closePopUpBtn.onclick = () => {
    document.querySelector(".popUpContainer").classList.remove("active");
  }

})