const menuButton = document.getElementById("menuButton");
const menu = document.getElementById("menu");

menuButton.addEventListener("click", function () {
  menu.classList.toggle("open");
});

const menuLinks = menu.querySelectorAll("a");

for (let i = 0; i < menuLinks.length; i++) {
  menuLinks[i].addEventListener("click", function () {
    menu.classList.remove("open");
  });
}


const filterButtons = document.querySelectorAll(".filter-button");
const projects = document.querySelectorAll(".project");

for (let i = 0; i < filterButtons.length; i++) {
  filterButtons[i].addEventListener("click", function () {
    const filter = this.dataset.filter; 

    for (let j = 0; j < filterButtons.length; j++) {
      filterButtons[j].classList.remove("active");
    }
    this.classList.add("active");

    for (let k = 0; k < projects.length; k++) {
      if (filter === "all" || projects[k].classList.contains(filter)) {
        projects[k].classList.remove("hide");
      } else {
        projects[k].classList.add("hide");
      }
    }
  });
}


const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    formMessage.textContent = "Please fill in all fields marked with *";
    formMessage.className = "error";
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    formMessage.textContent = "Please enter a correct email";
    formMessage.className = "error";
    return;
  }

  formMessage.textContent = "Thank you, " + name + "! (Demo: the form does not send data yet)";
  formMessage.className = "";
  form.reset();
});
