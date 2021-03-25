//Global variables
const featuredProducts = document.querySelector(".featured-products");
const featImg = document.querySelectorAll(
  ".featured-products .product-img img"
);

//Pop-up when an image is clicked
function pop_Up() {
  const popUp = document.querySelector(".pop-up");
  const X = document.querySelector(".X");
  const popImg = document.querySelector(".pop-up .pop-img img");
  const popPrice = document.querySelector(".pop-up .price-tag");
  const quantity = document.querySelector(".quantity");
  const main = document.querySelector("main");
  const size = document.querySelector(".pop-up .size");
  const name = document.querySelector(".pop-up .product-name");

  //create <option> tag, add values to it then append it to <select> tag
  for (var i = 1; i < 10; i++) {
    const option = document.createElement("option");
    option.textContent = i;
    quantity.appendChild(option);
  }

  //Run the function popAppear when each image is clicked
  featImg.forEach((image) => {
    image.addEventListener("click", popAppear);

    function popAppear() {
      const description = this.parentNode.nextElementSibling;
      const priceTag = description.children[2];

      main.style.filter = "blur(5px)";
      popPrice.innerHTML = priceTag.innerHTML;
      popUp.style.display = "block";
      popImg.src = this.src;
      popImg.alt = this.alt;
      name.textContent = description.children[0].textContent;
      size.innerHTML = description.children[1].innerHTML;

      name.style.fontSize = "30px";
      name.style.color = "#e1755e";
    }
  });

  //Run the function popdisappear when the X is clicked
  X.addEventListener("click", popDisappear);

  function popDisappear() {
    popUp.style.display = "none";
    main.style.filter = "blur(0px)";
  }
}
pop_Up();
