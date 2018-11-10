var link = document.querySelector(".button-link");
var popup = document.querySelector(".modal-popup");
var close = document.querySelector(".close-button");
var userName = popup.querySelector("[name = name]"); // находим поле с атрибутом name = "name"
var form = popup.querySelector("form"); // находим форму по тегу

link.addEventListener("click", function(evt) {evt.preventDefault();
    popup.classList.add("modal-show");
    userName.focus(); //устанавливаем фокус в поле с атрибутом name = "name"
});
close.addEventListener("click", function(evt) {evt.preventDefault();
    popup.classList.remove("modal-show");
});
form.addEventListener("submit", function(evt) { //ловим событие отправки формы
    evt.preventDefault(); // отменяем действие по умолчанию
    console.log("Отправляем форму");
})