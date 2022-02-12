function createContact() {
  const content = document.querySelector("#content");
  const main = document.querySelector(".main");
  main.classList.remove("menu-container");
  main.textContent = "";
  const locationImg = document.createElement("img");
  locationImg.src = "/src/assets/location.png";
  const phone = document.createElement("h3");
  const email = document.createElement("h3");
  phone.textContent = "Phone: 1876/87981929";
  email.textContent = "Email: losteriapizzeria@gmail.com";
  main.appendChild(locationImg);
  main.appendChild(phone);
  main.appendChild(email);
}

export default createContact;
