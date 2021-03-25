/*!--Cakes Page---*/
var cakesBody = document.createElement("tbody");

function fillCart() {
  var add = document.getElementsByClassName("add");

  for (var i = 0; i < add.length; i++) {
    add[i].addEventListener("click", getData);
  }
}

function getData(e) {
  var section = e.target.offsetParent;
  var description = section.getElementsByClassName("description");

  var priceTag = description[0].getElementsByClassName("price-tag")[0];
  var imgContainer = section.getElementsByClassName("cake-image")[0];
  var imgLocation = imgContainer.children[0].src;
  var price = priceTag.getElementsByClassName("price")[0].textContent;

  //document.location = "./cart.html" + "?price=" + price;
  var cakesRow = document.createElement("tr");
  cakesBody.appendChild(cakesRow);
  cakesRow.innerHTML = `
  <td class="first-td">
    <div class="product-img">
      <img
        src="${imgLocation}"
        alt=""
      />
    </div>
    <div class="product-description">
      <h3 class="product-name">Mommas best</h3>
    </div>
  </td>
  <td>
    <p class="price-tag">${price}</p>
  </td>
  <td>
    <div class="cart-btns">
      <input class="amount" type="number" value = "1"/>
      <button class="remove">Remove</button>
    </div>
  </td>
  `;
  var cakesBodyContent = cakesBody.innerHTML;
  localStorage.setItem("cakesBody", cakesBodyContent);
}

fillCart();
