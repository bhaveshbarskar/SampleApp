var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var button = document.querySelectorAll(".btn-buy");
console.log(button);
for (var i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function() {
    backdrop.style.display = "block";
    modal.style.display = "block";
  });
}
