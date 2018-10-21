var link = document.querySelector(".button-link");
var popup = document.querySelector(".modal-popup");
var close = document.querySelector(".close-button");

link.addEventListener("click", function(evt) {evt.preventDefault();
    popup.classList.add("modal-show");
});
close.addEventListener("click", function(evt) {evt.preventDefault();
    popup.classList.remove("modal-show")
});