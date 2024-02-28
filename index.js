//FOR PRODUCT DISPLAY
const productDisplay = document.querySelector(".product-display");
const thumbnails = document.querySelectorAll(".thumbnail");
const filledThumbnails = document.querySelector(".filled-thumbnail");

let showModal = false;

thumbnails.forEach((thumbnail, i) => {
  thumbnail.addEventListener("click", (e) => {
    thumbnails.forEach((item) => item.classList.remove("active"));
    e.currentTarget.classList.add("active");
    productDisplay.src = `./images/image-product-${i + 1}.jpg`;
    filledThumbnails.src = `/images/image-product-${i + 1}-thumbnail.jpg`;
  });
});

//FOR EMPTY-BASKET TIMEOUT
/*const handleEmptyBasket = () => {
  setTimeout(() => {
    emptyBasket.classList.add("empty-fade-out");
  }, 1000);

  setTimeout(() => {
    emptyBasket.style.display = "none";
    emptyBasket.classList.remove("empty-fade-out");
  }, 3000);
};*/

//HIDING MODAL WHEN ANYWHERE ON THE PAGE IS CLICKED



//INCREASE AND DECREASE BUTTONS
const productNum = document.querySelector(".product-num");
const minusIcon = document.querySelector(".minus-icon");
const plusIcon = document.querySelector(".plus-icon");

let quantity = 0;
let addedToCart = false;

const handleIncreaseAndDecrease = (type) => {
  if (type === "add") {
    quantity++;
  } else {
    quantity--;
  }

  productNum.textContent = quantity;
  if (addedToCart) {
    cartNumValue.textContent = quantity;
    quantityText.innerHTML = `<p>$125 x ${quantity}  <span>$${
      quantity * 125
    }</span></p>`;
  }

  if (quantity === 0) {
    addedToCart = false;
    emptyBasket.style.display = "block";

    filledBasket.style.display = "none";
    cartNumValue.style.display = "none";

  }
};

plusIcon.addEventListener("click", () => {
  handleIncreaseAndDecrease("add");
});

minusIcon.addEventListener("click", () => {
  quantity === 0 ? null : handleIncreaseAndDecrease("subtract");
});

//FOR FILLED AND EMPTY BASKETS
const cartIcon = document.querySelector(".cart-icon");
const addToCart = document.querySelector(".add-to-cart");
const emptyBasket = document.querySelector(".empty-basket");
const cartNumValue = document.querySelector(".cart-icon-value");
const filledBasket = document.querySelector(".filled-basket");
const quantityText = document.querySelector(".quantity");



window.addEventListener("click", (event)=>{
  
  if (emptyBasket != event.target && showModal) {
    //emptyBasket.style.display = "none";
    console.log(showModal);
  }
});

addToCart.addEventListener("click", () => {
  let newQuantity = quantity;

  if (newQuantity === 0) {
    emptyBasket.style.display = "block";
    showModal = true;
  } else {
    emptyBasket.style.display = "none";
    showModal = false
  }

  

  if (newQuantity > 0) {
    cartNumValue.style.display = "block";
    filledBasket.style.display = "block";
    cartNumValue.textContent = newQuantity;
    quantityText.innerHTML = `<p>$125 x ${quantity}  <span>$${
      quantity * 125
    }</span></p>`;
  }

  addedToCart = true;

 
});

cartIcon.addEventListener("click", () => {
  emptyBasket.style.display = "block";
  showModal = true;
});

const deleteIcon = document.querySelector(".delete-icon");

deleteIcon.addEventListener("click", () => {
  filledBasket.style.display = "none";
  cartNumValue.style.display = "none";
  emptyBasket.style.display = "block";
  addedToCart = false;
showModal = true;
});

//CHECKOUT
const checkOut = document.querySelector(".check-out");
const checkOutSuccess = document.querySelector(".checkout-success");
checkOut.addEventListener("click", () => {
  checkOutSuccess.style.display = "block";
  cartNumValue.style.display = "none";
  filledBasket.style.display = "none";

  setTimeout(() => {
    checkOutSuccess.classList.add("fade-out");
  }, 1000);

  setTimeout(() => {
    checkOutSuccess.style.display = "none";
  }, 4000);
});

//PRODUCT SLIDES
const imageUrls = [
  "images/image-product-1.jpg",
  "images/image-product-2.jpg",
  "images/image-product-3.jpg",
  "images/image-product-4.jpg",
];

const displayMobile = document.querySelector(".product-display-mobile");
const nextArrow = document.querySelector(".next");
const previousArrow = document.querySelector(".previous");

let currentDisplay = 0;

nextArrow.addEventListener("click", () => {
  currentDisplay++;

  if (currentDisplay >= imageUrls.length) {
    currentDisplay = 0;
  }
  displayMobile.src = imageUrls[currentDisplay];
});

previousArrow.addEventListener("click", () => {
  currentDisplay--;

  if (currentDisplay < 0) {
    currentDisplay = imageUrls.length - 1;
  }
  displayMobile.src = imageUrls[currentDisplay];
});

//MOBILE MENU
const container = document.querySelector(".container");
const iconMenu = document.querySelector(".icon-menu");
const menu = document.querySelector(".menu-mobile");
const iconClose = document.querySelector(".icon-close");

iconMenu.addEventListener("click", () => {
  menu.style.display = "block";
  container.style.backgroundColor = "#696b80";
  container.style.opacity = "0.6";
  menu.style.opacity = "1";
});

iconClose.addEventListener("click", () => {
  menu.style.display = "none";
  container.style.backgroundColor = "";
  container.style.opacity = "1";
});
