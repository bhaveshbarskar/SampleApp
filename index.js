var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var button = document.querySelectorAll(".btn-buy");
var closeButton = document.querySelector(".modal_action2");
var toggleButton = document.querySelector(".toggle-button");
var sideNav = document.querySelector(".side-nav");
console.log(sideNav);
console.log(backdrop);

for (var i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function() {
    backdrop.style.display = "block";
    modal.style.display = "block";
  });
}

backdrop.addEventListener("click", function() {
  sideNav.style.display = "none";
  close_modal();
});

if (closeButton) {
  closeButton.addEventListener("click", close_modal);
}

function close_modal() {
  backdrop.style.display = "none";
  if (modal) {
    modal.style.display = "none";
  }
}

toggleButton.addEventListener("click", function() {
  sideNav.style.display = "block";
  backdrop.style.display = "block";
});
