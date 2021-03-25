//Global variables
const header = document.querySelector("header");
const body = document.querySelector("body");
const navlinks = document.getElementsByClassName("navlink");

//header disappear when scrolling down and appear when scrolling up
function headerAppear() {
  let lastScroll = 0;

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    const scrollUp = "scroll-up";
    const scrollDown = "scroll-down";

    if (currentScroll == 0) {
      body.classList.remove(scrollUp);
      return;
    }
    if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
      //down
      body.classList.remove(scrollUp);
      body.classList.add(scrollDown);
    } else if (
      currentScroll < lastScroll &&
      body.classList.contains(scrollDown)
    ) {
      //up
      body.classList.remove(scrollDown);
      body.classList.add(scrollUp);
    }

    lastScroll = currentScroll;
  });
}
headerAppear();

function cartItemsValue() {
  let items = document.querySelector(".cart span");

  if (localStorage) {
    var cartValue = localStorage.getItem("cartValue");
    items.textContent = cartValue;
  }
}
cartItemsValue();
