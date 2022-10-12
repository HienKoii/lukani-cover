window.addEventListener("scroll", function () {
  const setHeight = this.scrollY;
  const setWidth = this.screen.availWidth;
  const headerFixed = document.querySelector(".header__fixed");
  setHeight >= 100 && setWidth > 600
    ? headerFixed.classList.add("active")
    : headerFixed.classList.remove("active");
});

const btnMobile = document.querySelector(".nav__mobile--icon");
const btnClose = document.querySelector(".nav__mobile--close");
const menuMobile = document.querySelector(".menu__mobile");
const overLay = document.querySelector(".nav__overlay");
btnMobile.addEventListener("click", () => {
  menuMobile.classList.add("toggle");
  btnClose.classList.add("active");
  overLay.classList.add("active");
});
btnClose.addEventListener("click", () => {
  menuMobile.classList.remove("toggle");
  btnClose.classList.remove("active");
  overLay.classList.remove("active");
});
// toggle menu header__categories
const categoriesBtn = document.querySelector(".header__categories--toggle");
categoriesBtn.addEventListener("click", function () {
  const categoriesSub = document.querySelector(".categories__sub");
  categoriesSub.classList.toggle("toggle");
});

// toggle theme
const btnTheme = document.querySelector(".header__controls--toggle");
btnTheme.addEventListener("click", () => {
  btnTheme.classList.toggle("active");
});

//slide show
// $(".slider__media").slick();
// const btnFilter = document.querySelectorAll(".products__tab--item");
// const productsItem = document.querySelectorAll(".products__item");
// btnFilter.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     document
//       .querySelector(".products__tab--item.active")
//       .classList.remove("active");
//     btn.classList.add("active");
//     const dataBtn = btn.getAttribute("data");
//     productsItem.forEach((item) => {
//       const filterData = item.getAttribute("data-filter");
//       if (dataBtn === filterData) {
//         item.classList.add("hidden");
//       } else if (dataBtn === "all") {
//         item.classList.remove("hidden");
//       } else {
//         item.classList.remove("hidden");
//       }
//     });
//   });
// });

// // thay doi trang thai view products trong shop
// const btnSquare = document.querySelector(".shop__product--view-icon.square");
// const btnlist = document.querySelector(".shop__product--view-icon.list");
// const viewSquare = document.querySelector(".shop__product-square");
// const viewList = document.querySelector(".shop__product-list");
// btnSquare.addEventListener("click", () => {
//   btnlist.classList.add("off");
//   btnSquare.classList.remove("off");

//   viewSquare.classList.add("active");
//   viewList.classList.remove("active");
// });
// btnlist.addEventListener("click", () => {
//   btnlist.classList.remove("off");
//   btnSquare.classList.add("off");

//   viewSquare.classList.remove("active");
//   viewList.classList.add("active");
// });

// slider

// hidden header__fixed
