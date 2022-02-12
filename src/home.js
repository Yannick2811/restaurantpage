// import loadMainSite from "./mainsite";

function createHome() {
  const content = document.querySelector("#content");
  const main = document.querySelector(".main");
  main.classList.remove("menu-container");
  main.textContent =
    "Your new favorite restaurant in your area! Pizza straight out of a stone oven and the freshest pasta outside of Italy!";
  let chefImg = document.createElement("img");
  chefImg.classList.add("chef-image");
  chefImg.src = "/src/assets/chef.jpg";
  main.appendChild(chefImg);
  // content.appendChild(mainContent);
}

export default createHome;
