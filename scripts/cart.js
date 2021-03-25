//Global variables
var tbody = document.getElementsByTagName("tbody")[0];
var rows = tbody.getElementsByTagName("tr");
const main = document.querySelector("main");
const popUp = document.querySelector(".pop-up");
const X = document.querySelector(".X");
let items = document.querySelector(".cart span");

/*!--Cart Page---*/

window.addEventListener("DOMContentLoaded", () => {
  updateTotal();
});

//let price = document.location.search.replace(/^.*?\=/, "");

addCart();
//Add items to the cart
function addCart() {
  var tbody = document.getElementsByTagName("tbody")[0];

  var remove = document.getElementsByClassName("remove");
  for (var i = 0; i < remove.length; i++) {
    var button = remove[i];
    button.addEventListener("click", removeItem);
  }

  tbody.innerHTML = localStorage.getItem("cakesBody");

  items.textContent = tbody.children.length;
  var cartValue = items.textContent;
  localStorage.setItem("cartValue", cartValue);
}

//remove the row on click of remove button
function changeQuantity() {
  var remove = document.getElementsByClassName("remove");
  for (var i = 0; i < remove.length; i++) {
    var button = remove[i];
    button.addEventListener("click", removeItem);
  }

  var rowQuantity = document.getElementsByClassName("amount");
  for (var i = 0; i < rowQuantity.length; i++) {
    var input = rowQuantity[i];
    input.addEventListener("change", inputChanged);
  }
}
changeQuantity();

function inputChanged(e) {
  var input = e.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updateTotal();
}

//Remove the cart item
function removeItem(e) {
  var btnClicked = e.target;
  btnClicked.parentElement.parentElement.parentElement.remove();
  items.textContent = tbody.children.length;
  var cartValue = items.textContent;
  localStorage.setItem("cartValue", cartValue);
  updateTotal();
}

//update cart total
function updateTotal() {
  var tr = document.getElementsByTagName("tr");
  var rowQuantity = document.getElementsByClassName("amount");
  var total = 0;

  for (var i = 0; i < rowQuantity.length; i++) {
    var input = rowQuantity[i];
    input.addEventListener("change", inputChanged);
  }

  for (var i = 1; i < tr.length - 1; i++) {
    var cartRow = tr[i];
    var rowPriceTag = cartRow.getElementsByClassName("price-tag")[0];
    var rowQuantityTag = cartRow.getElementsByClassName("amount")[0];

    var price = parseFloat(rowPriceTag.textContent.replace("Ksh", ""));
    var quantity = rowQuantityTag.value;
    total = total + price * quantity;
  }
  var totalPrice = document.querySelector("#total");
  totalPrice.innerHTML = `Total: <span> Ksh ${total}</span>`;
}

//clear cart on purchase
function purchase() {
  var purchase = document.getElementById("purchase");

  purchase.addEventListener("click", updateCart);

  updateTotal();
}

function updateCart() {
  popAppear();
  for (var i = 0; i < rows.length; i++) {
    var row = rows[i];
    tbody.deleteRow(row);
    items.textContent = 0;
    localStorage.removeItem("cakesBody");
    updateCart();
    updateTotal();
  }
}
//pop-up appears when purchase button is clicked
function popAppear() {
  main.style.filter = "blur(5px)";
  popUp.style.display = "block";

  //Run the function popdisappear when the X is clicked
  X.addEventListener("click", popDisappear);
}

function popDisappear() {
  popUp.style.display = "none";
  main.style.filter = "blur(0px)";
}

purchase();
