const menuLateral = document.querySelector(".menu-desplegable"),
      menu = document.getElementById("menu");

menu.addEventListener("click", () => menuLateral.classList.toggle("active"));
