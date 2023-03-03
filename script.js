// document.querySelectorAll(".conteiner").forEach((el) => {
//   el.addEventListener("click", () => {
//     let text = el.nextElementSibling;
//     if (text.style.maxHeight) {
//       document
//         .querySelectorAll(".text")
//         .forEach((el) => (el.style.maxHeight = null));
//     } else {
//       document
//         .querySelectorAll(".text")
//         .forEach((el) => (el.style.maxHeight = null));
//       text.style.maxHeight = text.scrollHeight + "px";
//     }
//   });
// });

// const icons = document.querySelector(".arrow");

// icons.addEventListener("click", () => {
//   icons.classList.toggle("rotated");
// });

var acc = document.getElementsByClassName("conteiner");
var questColor = document.getElementsByClassName("info");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
