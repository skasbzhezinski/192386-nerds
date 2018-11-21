var link = document.querySelector(".button-link");
var popup = document.querySelector(".modal-popup");
var close = document.querySelector(".close-button");
var userName = popup.querySelector("[name = name]"); // находим поле с атрибутом name = "name"
var userEmail = popup.querySelector("[name = mail]"); // находим поле с атрибутом name = "email"
var form = popup.querySelector("form"); // находим форму по тегу
var mailStorage = localStorage.getItem("email"); //записываем в переменную значение введенного value
var nameStorage = localStorage.getItem("name");


link.addEventListener("click", function(evt) {evt.preventDefault();
    popup.classList.add("modal-show"); //показывает всплывающее окно
    userName.focus(); //устанавливаем фокус в поле с атрибутом name = "name"
    if (mailStorage) {
        userEmail.value = mailStorage;
    }
    if (nameStorage) {
        userName.value = nameStorage;
    }
});

close.addEventListener("click", function(evt) {evt.preventDefault();
    popup.classList.remove("modal-show");
});

//если localStorage не работает локально
var isStorageSupport = true;

try {
    (mailStorage = localStorage.getItem("email")) ||
    (nameStorage = localStorage.getItem("name"));
} catch (err) {
    isStorageSupport = false;
}


form.addEventListener("submit", function(evt) { //ловим событие отправки формы
    evt.preventDefault(); // отменяем действие по умолчанию
    console.log("Отправляем форму");
    if (!userName.value || !userEmail.value) { //если не введено хотя бы одно значение, выведем напоминание 
        console.log("Нужно ввести Ваше имя и email");
    } else {
        if (isStorageSupport) { //условие: если localStorage работает
            localStorage.setItem("email", userEmail.value);
            localStorage.setItem("name", userName.value); //иначе запишем введенные значения в localStorage
        }
        console.log(userName.value); //выводим в консоль введенные в поля значения
        console.log(userEmail.value);
    }
});

//выход из всплывающего окна по нажатию ESC
window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.contains("modal-show")) {
            popup.classList.remove("modal-show");
        }
    }
});