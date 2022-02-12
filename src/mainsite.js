import loadMenu from "./menu";
import createHome from "./home";
import createContact from "./contact";
const content = document.querySelector("#content");
const mainContent = document.querySelector("#main-content");

function createHeader() {
  const main = document.querySelector(".main");
  const header = document.createElement("div");
  header.classList.add("header");

  const restaurantName = document.createElement("h1");
  restaurantName.classList.add("restaurant-name");
  restaurantName.textContent = "L'Osteria Pizzaria";

  const navList = document.createElement("div");
  navList.classList.add("navlist");
  const home = document.createElement("button");
  home.id = "home";
  home.classList.add("button-nav");
  home.textContent = "Home";
  navList.appendChild(home);
  home.addEventListener("click", () => {
    createHome();
  });
  const menu = document.createElement("button");
  menu.id = "menu";
  menu.classList.add("button-nav");
  menu.textContent = "Menu";
  navList.appendChild(menu);
  menu.addEventListener("click", () => {
    loadMenu();
  });
  const contact = document.createElement("button");
  contact.id = "contact";
  contact.classList.add("button-nav");
  contact.textContent = "Contact";
  navList.appendChild(contact);
  contact.addEventListener("click", () => {
    createContact();
  });
  header.appendChild(restaurantName);
  header.appendChild(navList);

  return header;
}

function createFooter() {
  const footer = document.createElement("div");
  footer.classList.add("footer");

  const footerContent = document.createElement("p");
  footerContent.textContent =
    "Copyright © Yannick Fürsich for the OdinProject 2022";
  footer.appendChild(footerContent);

  return footer;
}

function createMain() {
  const main = document.createElement("div");
  main.classList.add("main");
  return main;
}

function loadMainSite() {
  const content = document.querySelector("#content");
  content.appendChild(createHeader());
  content.appendChild(createMain());
  content.appendChild(createFooter());
  content.appendChild(createHome());
}

export default loadMainSite;
