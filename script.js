const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menutBtnIcon = menuBtn.querySelector("i");


menuBtn.addEventListener("click", (e)=>{
        navLinks.classList.toggle("open");

        const isOpen = navLinks.classList.contains("open");
        menutBtnIcon.setAttribute("class", isOpen?"ri-close-line":"ri-menu-line");
});

navLinks.addEventListener("click",(e)=>{
    navLinks.classList.remove("open");
    menutBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  };

  ScrollReveal().reveal(".about__container .section__header", {
    ...scrollRevealOption,
  });

ScrollReveal().reveal(".about__container .section__description", {
    ...scrollRevealOption,
    delay:500,
    interval:500
});

ScrollReveal().reveal(".about__container img", {
    ...scrollRevealOption,
    delay:1500,
    interval:500
});