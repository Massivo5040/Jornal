const menu = document.querySelector(".container__menu");
console.log(menu);

const openMenu = () => {
  menu.classList.add("open");
  menu.classList.remove("closed");
};

const closeMenu = () => {
  menu.classList.add("closed");
};
