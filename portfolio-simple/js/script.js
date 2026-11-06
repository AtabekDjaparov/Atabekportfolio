// ===== 1. Меню на телефоне =====
const menuButton = document.getElementById("menuButton");
const menu = document.getElementById("menu");

// по клику на бургер добавляем или убираем класс "open"
menuButton.addEventListener("click", function () {
  menu.classList.toggle("open");
});

// когда нажали на ссылку в меню - закрываем меню
const menuLinks = menu.querySelectorAll("a");

for (let i = 0; i < menuLinks.length; i++) {
  menuLinks[i].addEventListener("click", function () {
    menu.classList.remove("open");
  });
}


// ===== 2. Фильтр проектов =====
const filterButtons = document.querySelectorAll(".filter-button");
const projects = document.querySelectorAll(".project");

for (let i = 0; i < filterButtons.length; i++) {
  filterButtons[i].addEventListener("click", function () {
    // this - это кнопка, на которую нажали
    const filter = this.dataset.filter; // "all", "coded" или "designed"

    // сначала убираем подсветку у всех кнопок
    for (let j = 0; j < filterButtons.length; j++) {
      filterButtons[j].classList.remove("active");
    }
    // и подсвечиваем нажатую
    this.classList.add("active");

    // показываем или прячем проекты
    for (let k = 0; k < projects.length; k++) {
      if (filter === "all" || projects[k].classList.contains(filter)) {
        projects[k].classList.remove("hide");
      } else {
        projects[k].classList.add("hide");
      }
    }
  });
}


// ===== 3. Форма обратной связи =====
const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function (event) {
  // чтобы страница не перезагружалась после отправки
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // проверяем, что обязательные поля заполнены
  if (name === "" || email === "" || message === "") {
    formMessage.textContent = "Please fill in all fields marked with *";
    formMessage.className = "error";
    return;
  }

  // простая проверка email
  if (!email.includes("@") || !email.includes(".")) {
    formMessage.textContent = "Please enter a correct email";
    formMessage.className = "error";
    return;
  }

  // форма пока ничего никуда не отправляет, просто показываем сообщение
  formMessage.textContent = "Thank you, " + name + "! (Demo: the form does not send data yet)";
  formMessage.className = "";
  form.reset();
});
