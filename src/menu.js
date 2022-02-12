import createHome from "./home";

function createMenu() {
  const main = document.querySelector(".main");
  main.classList.add("menu-container");
  main.textContent = "";

  main.appendChild(
    createMenuItem("Mozarella", "Fresh Mozarella, Tomatoes and Basil")
  );
  main.appendChild(
    createMenuItem("Salami", "Hot and mild Italian Salami with fresh Mozarella")
  );
  main.appendChild(
    createMenuItem("Funghi", "Fresh Button Mushrooms and Mozarella")
  );
  main.appendChild(
    createMenuItem("Salsiccia", "Fresh homemade sausage and Mozarella")
  );

  return menuContainer;
}

function createMenuItem(name, description) {
  const item = document.createElement("div");
  item.classList.add("menu-item");

  const itemName = document.createElement("h3");
  itemName.textContent = name;

  const itemDescription = document.createElement("p");
  itemDescription.textContent = description;

  const itemImage = document.createElement("img");
  itemImage.src = `/src/assets/${name.toLowerCase()}.jpeg`;

  item.appendChild(itemImage);
  item.appendChild(itemName);
  item.appendChild(itemDescription);

  return item;
}

function loadMenu() {
  const content = document.querySelector("#content");
  content.appendChild(createMenu());
  removeHome();
  removeContact();
}

function removeHome() {
  const content = document.querySelector("#content");
  const mainContent = document.querySelector("#main-content");
  content.removeChild(mainContent);
}

function removeContact() {
  const content = document.querySelector("#content");
  const contactContainer = document.querySelector(".contact-container");
  content.removeChild(contactContainer);
}

export default loadMenu;
